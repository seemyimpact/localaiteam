'use client';

import { cn } from '@/app/lib/utils';
import React, { useState, useEffect } from 'react';

export const Meteors = ({
  number = 20,
  className = '',
  color = '#71b1d1', // Use our brand color by default
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
}) => {
  // Use state to store meteor configurations
  const [meteorConfigs, setMeteorConfigs] = useState([]);

  // Generate meteor configurations on client-side only
  useEffect(() => {
    const newMeteorConfigs = [...Array(number)].map((_, i) => {
      const meteorSize = Math.floor(Math.random() * 3) + 3;
      return {
        id: i,
        size: meteorSize,
        left: Math.floor(Math.random() * 100) + '%',
        delay: (Math.random() * (maxDelay - minDelay) + minDelay).toFixed(4) + 's',
        duration: Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + 's',
        rotation: (angle + Math.random() * 15).toFixed(4),
      };
    });
    setMeteorConfigs(newMeteorConfigs);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {meteorConfigs.map((config) => (
        <span
          key={config.id}
          className={cn(
            'animate-meteor absolute top-0 left-1/2 h-[1px] w-[1px] rounded-[9999px]',
            className
          )}
          style={{
            top: '0px',
            left: config.left,
            animationDelay: config.delay,
            animationDuration: config.duration,
            opacity: 0.8,
            transform: `rotate(${config.rotation}deg)`,
            width: `${config.size}px`,
            height: `${config.size}px`,
            boxShadow: `0 0 ${config.size * 2}px ${color}`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};