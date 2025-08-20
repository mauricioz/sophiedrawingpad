
import React from 'react';
import { TrashIcon } from './icons';

interface DrawingToolbarProps {
  brushColor: string;
  setBrushColor: (color: string) => void;
  brushSize: number;
  setBrushSize: (size: number) => void;
  clearCanvas: () => void;
}

const colors = ['#000000', '#ef4444', '#3b82f6', '#22c55e', '#facc15', '#ec4899', '#8b5cf6', '#a16207'];
const sizes = [
    { name: 'S', value: 2 },
    { name: 'M', value: 5 },
    { name: 'L', value: 10 },
];

export const DrawingToolbar: React.FC<DrawingToolbarProps> = ({
  brushColor,
  setBrushColor,
  brushSize,
  setBrushSize,
  clearCanvas,
}) => {
  return (
    <div className="w-full max-w-[500px] bg-gray-100 p-3 rounded-xl shadow-md flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center sm:justify-between items-center">
      {/* Color Palette */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {colors.map(color => (
          <button
            key={color}
            onClick={() => setBrushColor(color)}
            className={`w-8 h-8 rounded-full transition-transform transform hover:scale-110 ${
              brushColor === color ? 'ring-2 ring-offset-2 ring-purple-500' : ''
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Color ${color}`}
          />
        ))}
      </div>

      {/* Controls Group */}
      <div className="flex items-center gap-2">
        {/* Brush Size */}
        <div className="flex items-center gap-2 bg-white p-1 rounded-lg">
          {sizes.map(size => (
            <button
              key={size.name}
              onClick={() => setBrushSize(size.value)}
              className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-gray-600 transition-colors ${
                brushSize === size.value ? 'bg-purple-200 text-purple-700' : 'hover:bg-gray-200'
              }`}
            >
              {size.name}
            </button>
          ))}
        </div>
        
        {/* Clear Button */}
        <button 
          onClick={clearCanvas}
          className="p-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-colors"
          aria-label="Borrar todo"
        >
          <TrashIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
