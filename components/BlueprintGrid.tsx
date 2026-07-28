'use client';

import { useRef, useEffect, useState } from 'react';

interface BlueprintGridProps {
  cellSize?: number;
  lineColor?: string;
  opacity?: number;
  children?: React.ReactNode;
}

export default function BlueprintGrid({
  cellSize = 20,
  lineColor = '#4A90D9',
  opacity = 0.06,
  children,
}: BlueprintGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    ctx.strokeStyle = lineColor;
    ctx.globalAlpha = opacity;
    ctx.lineWidth = 0.5;

    // Draw vertical lines
    for (let x = 0; x <= dimensions.width; x += cellSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, dimensions.height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= dimensions.height; y += cellSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(dimensions.width, y);
      ctx.stroke();
    }

    // Draw thicker major grid lines every 5 cells
    ctx.globalAlpha = opacity * 2;
    ctx.lineWidth = 1;

    for (let x = 0; x <= dimensions.width; x += cellSize * 5) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, dimensions.height);
      ctx.stroke();
    }

    for (let y = 0; y <= dimensions.height; y += cellSize * 5) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(dimensions.width, y);
      ctx.stroke();
    }
  }, [dimensions, cellSize, lineColor, opacity]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
      />
      {children}
    </div>
  );
}

