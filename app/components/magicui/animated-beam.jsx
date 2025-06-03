'use client';

import { cn } from '@/app/lib/utils';
import React from 'react';

export const AnimatedBeam = ({
  className,
  size = 'small',
  position = 'left',
  duration = 4,
  delay = 0,
  opacityRange = [0.2, 0.6],
  ...props
}) => {
  const beamWidth = size === 'small' ? 'w-1' : size === 'medium' ? 'w-2' : 'w-3';
  const beamPosition = position === 'left' ? 'left-0' : 'right-0';
  
  return (
    <div
      className={cn(
        'absolute top-0 h-full pointer-events-none animate-beam-move',
        beamPosition,
        beamWidth,
        className
      )}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        background: `linear-gradient(to bottom, transparent, rgba(113, 177, 209, ${opacityRange[0]}), rgba(113, 177, 209, ${opacityRange[1]}), rgba(113, 177, 209, ${opacityRange[0]}), transparent)`,
      }}
      {...props}
    />
  );
};
