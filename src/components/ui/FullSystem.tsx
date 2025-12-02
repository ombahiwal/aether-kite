import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fullSystemSvg from "../../assets/fullsystem.svg?raw";

interface Props {
  refs?: React.RefObject<SVGSVGElement>;
}

gsap.registerPlugin(ScrollTrigger);

const FullSystem: React.FC<Props> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    containerRef.current.innerHTML = fullSystemSvg;
    svgRef.current = containerRef.current.querySelector("svg");
    const svgElement = svgRef.current;
    if (!svgElement) return undefined;

    const paths = Array.from(svgElement.querySelectorAll("path"));
    const tweens: gsap.core.Tween[] = [];

    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      const tween = gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: svgElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      tweens.push(tween);
    });

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default FullSystem;
