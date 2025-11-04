import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollPathProps {
  color?: string;
  strokeWidth?: number;
  pathComplexity?: number;
}

const ScrollPath: React.FC<ScrollPathProps> = ({
  color = '#000',
  strokeWidth = 2,
  pathComplexity = 50,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !pathRef.current || !containerRef.current) return;

    const svg = svgRef.current;
    const path = pathRef.current;
    const container = containerRef.current;

    const updatePath = () => {
      // Find hero section and get its height
      const heroSection = document.querySelector('.hero-image');
      const heroHeight = heroSection ? heroSection.getBoundingClientRect().height : 0;
      
      // Find footer section and get its position
      const footer = document.querySelector('footer');
      let footerOffset = document.documentElement.scrollHeight;
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        footerOffset = footerRect.top + window.scrollY;
      }
      
      // Calculate dimensions - path should end at footer (not including footer height)
      const pathStartY = heroHeight;
      const pathEndY = footerOffset;
      const pathHeight = Math.max(0, pathEndY - pathStartY);
      const viewBoxWidth = window.innerWidth;
      const viewBoxHeight = footerOffset;

      // Set SVG viewBox and dimensions
      svg.setAttribute('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.style.width = '100%';
      svg.style.height = `${viewBoxHeight}px`;
      container.style.height = `${viewBoxHeight}px`;

      // Create a winding path starting after hero
      const points: string[] = [];
      const numPoints = pathComplexity;

      for (let i = 0; i <= numPoints; i++) {
        const progress = i / numPoints;
        // Y position starts from hero height and progresses through remaining height
        const y = pathStartY + (progress * pathHeight);
        
        // Create a winding pattern - sine wave that varies along the scroll
        const baseX = viewBoxWidth / 2;
        const amplitude = viewBoxWidth * 0.15 + Math.sin(progress * Math.PI * 4) * (viewBoxWidth * 0.08);
        const frequency = progress * 6 + Math.sin(progress * Math.PI * 2) * 2;
        const x = baseX + Math.sin(frequency) * amplitude + Math.cos(progress * Math.PI * 4) * (viewBoxWidth * 0.12);
        
        points.push(`${x},${y}`);
      }

      // Create path string using smooth curves
      let pathString = `M ${points[0]}`;
      for (let i = 1; i < points.length; i++) {
        const [x1, y1] = points[i - 1].split(',').map(Number);
        const [x2, y2] = points[i].split(',').map(Number);
        
        // Use quadratic bezier for smooth curves
        const cp1x = x1 + (x2 - x1) * 0.5;
        const cp1y = y1 + (y2 - y1) * 0.5;
        
        pathString += ` Q ${cp1x},${cp1y} ${x2},${y2}`;
      }

      path.setAttribute('d', pathString);

      // Get total path length
      const pathLength = path.getTotalLength();
      
      // Set up initial state
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        stroke: color,
        strokeWidth: strokeWidth,
        fill: 'none',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      });
    };

    // Initial path creation
    updatePath();

    // Wait for content to load before setting up scroll trigger
    const timeoutId = setTimeout(() => {
      updatePath();
      
      // Find hero section for trigger
      const heroSection = document.querySelector('.hero-image');
      const heroHeight = heroSection ? heroSection.getBoundingClientRect().height : 0;
      
      // Find footer for end trigger
      const footer = document.querySelector('footer');
      let footerOffset = document.documentElement.scrollHeight;
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        footerOffset = footerRect.top + window.scrollY;
      }
      
      // Animate path drawing on scroll, starting after hero and ending at footer
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: `top+=${heroHeight} top`,
          end: `top+=${footerOffset} top`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, 300);

    // Handle resize and content changes
    const handleResize = () => {
      updatePath();
      ScrollTrigger.refresh();
    };

    const handleLoad = () => {
      updatePath();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === document.body) {
          trigger.kill();
        }
      });
    };
  }, [color, strokeWidth, pathComplexity]);

  return (
    <div ref={containerRef} className="scroll-path-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
      <svg ref={svgRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'visible' }}>
        <path ref={pathRef} />
      </svg>
    </div>
  );
};

export default ScrollPath;

