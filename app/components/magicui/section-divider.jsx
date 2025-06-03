'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';

export const SectionDivider = ({
  className,
  orientation = "horizontal",
  decorative = true,
  gradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center my-2",
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          "h-px w-full mx-auto",
          gradient ? "bg-gradient-to-r from-transparent via-[#71b1d1]/30 to-transparent" : "bg-[#71b1d1]/20",
          orientation === "vertical" ? "h-full w-px" : "h-px w-full"
        )}
        aria-hidden={decorative}
        role={decorative ? "presentation" : "separator"}
      />
    </div>
  );
};
