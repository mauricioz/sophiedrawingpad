
import { useRef, useEffect, useState, useCallback } from 'react';
import type React from 'react';

type Point = {
  x: number;
  y: number;
};

type Path = {
    points: Point[];
    color: string;
    size: number;
}

export const useDrawing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [paths, setPaths] = useState<Path[]>([]);
  const [currentPath, setCurrentPath] = useState<Path | null>(null);
  const [brushColor, setBrushColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  const getCanvasContext = useCallback(() => {
    const canvas = canvasRef.current;
    return canvas ? canvas.getContext('2d') : null;
  }, []);

  const redrawCanvas = useCallback(() => {
    const ctx = getCanvasContext();
    if (!ctx || !canvasRef.current) return;
    
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    paths.forEach(path => {
      ctx.strokeStyle = path.color;
      ctx.lineWidth = path.size;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      if (path.points.length > 0) {
        ctx.moveTo(path.points[0].x, path.points[0].y);
      }
      path.points.forEach(point => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
    });
    
    if (currentPath && currentPath.points.length > 0) {
        ctx.strokeStyle = currentPath.color;
        ctx.lineWidth = currentPath.size;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(currentPath.points[0].x, currentPath.points[0].y);
        currentPath.points.forEach(point => {
            ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
    }

  }, [getCanvasContext, paths, currentPath]);

  useEffect(() => {
    redrawCanvas();
  }, [paths, currentPath, redrawCanvas]);

  const getCoordinates = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>): Point | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    
    let clientX, clientY;
    if ('touches' in event) {
        const touch = event.touches[0];
        if (!touch) return null;
        clientX = touch.clientX;
        clientY = touch.clientY;
    } else {
        clientX = event.clientX;
        clientY = event.clientY;
    }
    
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    return { x, y };
  };

  const startDrawing = useCallback((event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    const coords = getCoordinates(event);
    if (!coords) return;
    
    setIsDrawing(true);
    setCurrentPath({ points: [coords], color: brushColor, size: brushSize });
  }, [brushColor, brushSize]);

  const draw = useCallback((event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    event.preventDefault();
    const coords = getCoordinates(event);
    if (!coords) return;
    
    setCurrentPath(prevPath => prevPath ? { ...prevPath, points: [...prevPath.points, coords] } : null);
  }, [isDrawing]);

  const stopDrawing = useCallback(() => {
    if (isDrawing && currentPath) {
      setPaths(prevPaths => [...prevPaths, currentPath]);
    }
    setCurrentPath(null);
    setIsDrawing(false);
  }, [isDrawing, currentPath]);

  const clearCanvas = useCallback(() => {
    setPaths([]);
    const ctx = getCanvasContext();
    if (ctx && canvasRef.current) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [getCanvasContext]);

  return {
    canvasRef,
    startDrawing,
    draw,
    stopDrawing,
    clearCanvas,
    setBrushColor,
    brushColor,
    setBrushSize,
    brushSize,
  };
};
