
import React from 'react';
import type { Guide } from '../types';
import type { useDrawing } from '../hooks/useDrawing';

interface DrawingCanvasProps {
  guides: Guide[];
  pastGuides: Guide[];
  drawing: ReturnType<typeof useDrawing>;
}

export const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ guides, pastGuides, drawing }) => {
  const { canvasRef, startDrawing, draw, stopDrawing } = drawing;
  const width = 500;
  const height = 500;

  return (
    <div className="relative w-full max-w-[500px] aspect-square rounded-2xl shadow-lg border-4 border-gray-200 bg-white touch-none">
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${width} ${height}`}
      >
        {pastGuides.map((g, index) => (
          <path
            key={`past-${index}`}
            d={g.d}
            fill="none"
            stroke="#d1d5db" // gray-300
            strokeWidth="2"
          />
        ))}
        {guides.map((g, index) => (
          <path
            key={`current-${index}`}
            d={g.d}
            fill="none"
            stroke="#a78bfa" // violet-400
            strokeWidth="3"
            strokeDasharray="8 8"
            className="animate-pulse"
          />
        ))}
      </svg>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full h-full"
        onMouseDown={(e) => startDrawing(e)}
        onMouseMove={(e) => draw(e)}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={(e) => startDrawing(e)}
        onTouchMove={(e) => draw(e)}
        onTouchEnd={stopDrawing}
      />
    </div>
  );
};
