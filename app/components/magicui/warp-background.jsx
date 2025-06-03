'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/app/lib/utils';

export const WarpBackground = ({
  className,
  colors = ['#71b1d1', '#a6d5e9', '#d7ebf5'],
  animate = true,
  animationSpeed = 0.005,
  children,
  ...props
}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const animationRef = useRef(null);
  const time = useRef(0);

  const drawGradient = (ctx, canvasWidth, canvasHeight, t) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Create gradient with warp effect
    for (let i = 0; i < colors.length; i++) {
      const colorStop = i / (colors.length - 1);
      const x1 = canvasWidth * (0.5 + 0.4 * Math.sin(t + i * Math.PI / 2));
      const y1 = canvasHeight * (0.5 + 0.4 * Math.cos(t + i * Math.PI / 2));
      const x2 = canvasWidth * (0.5 + 0.4 * Math.sin(t + Math.PI + i * Math.PI / 2));
      const y2 = canvasHeight * (0.5 + 0.4 * Math.cos(t + Math.PI + i * Math.PI / 2));
      
      const gradient = ctx.createRadialGradient(x1, y1, 0, x2, y2, canvasWidth * 0.8);
      gradient.addColorStop(0, colors[i] + '40');  // Less transparent
      gradient.addColorStop(1, colors[i] + '10');  // Semi-transparent
      
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }
  };

  const animate3D = () => {
    if (!contextRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    
    time.current += animationSpeed;
    drawGradient(ctx, canvas.width, canvas.height, time.current);
    
    animationRef.current = requestAnimationFrame(animate3D);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    contextRef.current = ctx;
    
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawGradient(ctx, canvas.width, canvas.height, time.current);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    if (animate) {
      animationRef.current = requestAnimationFrame(animate3D);
    } else {
      drawGradient(ctx, canvas.width, canvas.height, 0);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors, animate, animationSpeed]);

  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)} {...props}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.85 }}
      />
      {children}
    </div>
  );
};
