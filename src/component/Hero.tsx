// src/components/Hero.tsx
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero: React.FC = () => {
  const scope = useRef<HTMLDivElement | null>(null); // container scope

  useGSAP(
    (context) => {
      const q = context.selector!; // scoped selector helper

      // 1) Float the kite forever
      gsap.to(q(".kite"), {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2) Intro timeline (staggered)
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(q(".hero-title"), { opacity: 0, y: 50, duration: 1 })
        .from(q(".hero-sub"), { opacity: 0, y: 30, duration: 0.8 }, "-=0.5");
    },
    { scope } // <-- critical: ties selectors/cleanup to this node
  );

  return (
    <section
      ref={scope}
      className="h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* SVG kite */}
      <svg
        className="kite w-48 h-48 text-cyan-400"
        viewBox="0 0 200 220"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <polygon points="100,10 190,100 100,190 10,100" />
        {/* simple dashed “string” — we’ll animate length later */}
        <line x1="100" y1="190" x2="100" y2="220" strokeDasharray="4 4" />
      </svg>

      <h1 className="hero-title mt-10 text-5xl md:text-7xl font-bold tracking-wide text-center">
        DRIVING ENERGY TRANSITION
      </h1>
      <p className="hero-sub mt-6 text-lg text-gray-300 text-center max-w-2xl">
        Powered by Autonomous Kites
      </p>
    </section>
  );
};

export default Hero;
