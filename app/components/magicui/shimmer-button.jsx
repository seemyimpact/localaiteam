'use client';

import { cn } from '@/app/lib/utils';
import React from 'react';

export const ShimmerButton = ({
  children,
  className,
  shimmerClassName,
  shimmerSize = '0.1em',
  shimmerColor = '#71b1d1',
  shimmerDuration = 2.5,
  shimmerDelay = 0.5,
  ...props
}) => {
  return (
    <button
      className={cn(
        'relative inline-flex h-10 overflow-hidden items-center justify-center rounded-lg bg-neutral-950 px-6 py-2 font-medium text-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50 hover:bg-neutral-900',
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span
          className={cn(
            "absolute inset-0 z-[1] translate-x-[-100%] animate-shimmer rounded-lg opacity-50 after:absolute after:inset-0",
            shimmerClassName
          )}
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            animationDuration: `${shimmerDuration}s`,
            animationDelay: `${shimmerDelay}s`,
            backgroundSize: shimmerSize,
          }}
        />
      </span>
      <span className="z-[2] relative">{children}</span>
    </button>
  );
};
