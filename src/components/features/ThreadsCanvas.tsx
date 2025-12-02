import React, { useEffect, useRef } from "react";
import { Noise } from "noisejs";

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
  numLines?: number;
}

const ThreadsCanvas: React.FC<ThreadsProps> = ({
  color = [105, 105, 105],
  numLines = 8,
  distance = 30,
  amplitude: userAmplitude = 350,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noise = new Noise(Math.random());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let winMidY = winHeight * 0.5;

    let t = 0;
    let lines: { x: number; y?: number; scaleFactor: number }[][] = [];
    
    const baseAmplitude = userAmplitude ?? winHeight * 0.4;
    let rafId: number;

    const lineSegments = () => {
      const numSegments = Math.round(winWidth * 0.25);
      const list = [];
      for (let i = 0; i < numSegments; i++) {
        const x = i / (numSegments - 1);
        const diff = Math.abs(x - 0.5);
        const scaleFactor = 1.1 - diff / 0.5;
        list.push({ x, scaleFactor });
      }
      return list;
    };

    const clear = () => {
      // Use CSS variable value for background - matches theme
      ctx.fillStyle = "#1a2332"; // var(--theme-bg-primary)
      ctx.fillRect(0, 0, winWidth, winHeight);
    };

    const draw = () => {
      clear();

      const spacing = distance / 1000;
      for (let lineIndex = 0; lineIndex < lines.length - 1; lineIndex++) {
        const verticalModifier = lineIndex * spacing;
        const segments = lines[lineIndex];

        ctx.beginPath();
        const [r, g, b] = color;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;

        segments.forEach((point, index) => {
          const x = winWidth * point.x;
          const frequency = winWidth * (point.x * 0.002);
          const y =
            winMidY +
            baseAmplitude *
              noise.simplex2(t + verticalModifier, t + frequency + verticalModifier * 3) *
              point.scaleFactor;

          if (index === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);

          point.y = y;
        });

        ctx.stroke();
        ctx.closePath();
      }

      t += 0.001;
    };

    const reset = () => {
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;
      winMidY = winHeight * 0.5;
      canvas.width = winWidth;
      canvas.height = winHeight;

      lines = [];
      for (let i = 0; i <= numLines; i++) {
        lines.push(lineSegments());
      }

      cancelAnimationFrame(rafId);
      loop();
    };

    const loop = () => {
      draw();
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", reset);
    reset();

    return () => {
      window.removeEventListener("resize", reset);
      cancelAnimationFrame(rafId);
    };
  }, [color, distance, numLines, userAmplitude]);

  return (
    <canvas 
      ref={canvasRef} 
      className="top-0 left-0 w-full h-full"
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'block',
        margin: 0,
        padding: 0
      }} 
    />
  );
};

export default ThreadsCanvas;
