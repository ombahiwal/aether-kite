import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as FullSystemSvg } from "../../assets/fullsystem.svg";


interface Props {
  refs?: React.RefObject<SVGSVGElement>;
}

gsap.registerPlugin(ScrollTrigger);

const FullSystem: React.FC<Props> = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll("path");
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <FullSystemSvg 
        ref={svgRef}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
export default FullSystem;
