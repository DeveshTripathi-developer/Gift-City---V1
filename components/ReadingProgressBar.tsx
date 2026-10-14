'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

interface ReadingProgressBarProps {
  className?: string;
}

export default function ReadingProgressBar({
  className = '',
}: ReadingProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div 
      className={`w-full h-[3px] bg-stone-200/40 overflow-hidden pointer-events-none ${className}`}
      aria-label="Reading progress"
      role="progressbar"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#b17a2b] via-[#dfa855] to-[#95631f] origin-left shadow-[0_0_8px_rgba(177,122,43,0.35)]"
        style={{ scaleX }}
      />
    </div>
  );
}
