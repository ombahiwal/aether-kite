// src/components/ResponsiveScrollLine.tsx
import { type RefObject, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type PointWP = { type: "xy"; x: number; y: number };
type ElemWP =
  | { type: "point"; selector: string; side?: "left" | "right" | "top" | "bottom"; offset?: number }
  | { type: "pointRef"; ref: RefObject<HTMLElement>; side?: "left" | "right" | "top" | "bottom"; offset?: number };

type Waypoint = PointWP | ElemWP;

type Props = {
  height?: number | string;              // e.g. "200vh"
  stroke?: string;
  strokeWidth?: number;
  tension?: number;                      // 0..1, curve smoothing
  waypoints: Waypoint[];
  pin?: boolean;
  start?: string;                        // ScrollTrigger start
  extraEnd?: number;                     // pixels added to end distance
};

export default function ResponsiveScrollLine({
  height = "200vh",
  stroke = "#CFE9FF",
  strokeWidth = 4,
  tension = 0.5,
  waypoints,
  pin = true,
  start = "top top",
  extraEnd = 800,
}: Props) {
  const scope = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  // Catmull–Rom -> cubic Bézier for smooth path
  const toSmoothPath = (pts: { x: number; y: number }[], t = 0.5) => {
    if (pts.length < 2) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] ?? pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] ?? p2;
      const cp1x = p1.x + ((p2.x - p0.x) / 6) * t * 3;
      const cp1y = p1.y + ((p2.y - p0.y) / 6) * t * 3;
      const cp2x = p2.x - ((p3.x - p1.x) / 6) * t * 3;
      const cp2y = p2.y - ((p3.y - p1.y) / 6) * t * 3;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  };

  useGSAP(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (ctx) => {
      const container = scope.current;
      const path = pathRef.current;
      if (!container || !path) return;

      const svg = container.querySelector("svg")!;
      let ro: ResizeObserver | null = null;

      const computePoints = () => {
        if (!container) return;

        const contRect = container.getBoundingClientRect();
        const toLocal = (r: DOMRect) => ({
          left: r.left - contRect.left + container.scrollLeft,
          right: r.right - contRect.left + container.scrollLeft,
          top: r.top - contRect.top + container.scrollTop,
          bottom: r.bottom - contRect.top + container.scrollTop,
          midX: r.left - contRect.left + container.scrollLeft + r.width / 2,
          midY: r.top - contRect.top + container.scrollTop + r.height / 2,
        });

        const pts: { x: number; y: number }[] = [];

        waypoints.forEach((wp) => {
          if (wp.type === "xy") {
            pts.push({ x: wp.x, y: wp.y });
            return;
          }

          // Resolve element from selector or ref; skip if missing
          let el: HTMLElement | null = null;
          if ("selector" in wp) el = document.querySelector(wp.selector) as HTMLElement | null;
          else if ("ref" in wp) el = wp.ref.current;

          if (!el) return; // <-- null-safe: skip missing element

          const box = toLocal(el.getBoundingClientRect());
          const o = wp.offset ?? 28;
          const side = wp.side ?? "bottom";
          if (side === "left") pts.push({ x: Math.max(4, box.left - o), y: box.midY });
          else if (side === "right") pts.push({ x: box.right + o, y: box.midY });
          else if (side === "top") pts.push({ x: box.midX, y: Math.max(4, box.top - o) });
          else pts.push({ x: box.midX, y: box.bottom + o });
        });

        if (pts.length < 2) return;

        // Size SVG to container’s scrollable height
        const w = container.clientWidth;
        const h = container.scrollHeight;
        svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
        svg.setAttribute("width", String(w));
        svg.setAttribute("height", String(h));

        // Build path
        const d = toSmoothPath(pts, tension);
        path.setAttribute("d", d);

        // Prepare dash
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });

        // Kill previous trigger if any
        ScrollTrigger.getById("lineDraw")?.kill();

        // Create scroll-linked draw
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            id: "lineDraw",
            trigger: container,
            start,
            end: () => `+=${Math.max(extraEnd, container.clientHeight)}`,
            scrub: true,
            pin,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      };

      // Compute after layout settles (next frame) to avoid nulls on first paint
      requestAnimationFrame(() => {
        computePoints();
        ScrollTrigger.refresh();
      });

      // Recompute on resize + when observed elements change
      ro = new ResizeObserver(() => {
        computePoints();
        ScrollTrigger.refresh();
      });
      ro.observe(container);
      // observe elements if they exist (selector ones may appear later)
      waypoints.forEach((wp) => {
        if (wp.type === "pointRef" && wp.ref.current) ro!.observe(wp.ref.current);
      });

      return () => {
        ro?.disconnect();
      };
    },
    { scope, dependencies: [JSON.stringify(waypoints), tension, pin, start, extraEnd] }
  );

  return (
    <div ref={scope} style={{ position: "relative", height }}>
      <svg className="pointer-events-none absolute inset-0" preserveAspectRatio="none">
        <path ref={pathRef} stroke={stroke} strokeWidth={strokeWidth} fill="none" opacity="0" />
      </svg>
    </div>
  );
}
