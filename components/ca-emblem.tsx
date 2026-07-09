'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type CAEmblemProps = {
  size?: number;
  className?: string;
  animated?: boolean;
};

export function CAEmblem({ size = 64, className, animated = true }: CAEmblemProps) {
  const MotionWrapper = animated ? motion.div : 'div';
  const motionProps = animated
    ? {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.8, ease: 'easeOut' as const },
      }
    : {};

  return (
    <MotionWrapper
      {...motionProps}
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke="url(#caGold)"
          strokeWidth="2.5"
          fill="rgba(1,32,64,0.4)"
        />
        {/* Inner decorative ring */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="url(#caGold)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.6"
        />
        {/* Top arc text background */}
        <path
          id="caTopArc"
          d="M 18 50 A 32 32 0 0 1 82 50"
          fill="none"
          stroke="none"
        />
        <text fill="#F8C437" fontSize="7" fontWeight="700" letterSpacing="2">
          <textPath href="#caTopArc" startOffset="50%" textAnchor="middle">
            CHARTERED ACCOUNTANT
          </textPath>
        </text>
        {/* Bottom arc text background */}
        <path
          id="caBottomArc"
          d="M 82 50 A 32 32 0 0 1 18 50"
          fill="none"
          stroke="none"
        />
        <text fill="#F8C437" fontSize="6" fontWeight="600" letterSpacing="1.5">
          <textPath href="#caBottomArc" startOffset="50%" textAnchor="middle">
            PPR TAX CONSULTANCY
          </textPath>
        </text>
        {/* Central CA monogram */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fill="url(#caGoldText)"
          fontSize="26"
          fontWeight="800"
          fontFamily="serif"
        >
          CA
        </text>
        {/* Decorative stars */}
        <circle cx="50" cy="14" r="1.5" fill="#F5B000" />
        <circle cx="50" cy="86" r="1.5" fill="#F5B000" />
        {/* Balance scales icon */}
        <g transform="translate(50, 50)" opacity="0.15">
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#F5B000" strokeWidth="1" />
          <line x1="-10" y1="-8" x2="10" y2="-8" stroke="#F5B000" strokeWidth="1" />
          <path d="M -10 -8 L -13 -3 L -7 -3 Z" fill="#F5B000" />
          <path d="M 10 -8 L 7 -3 L 13 -3 Z" fill="#F5B000" />
        </g>
        <defs>
          <linearGradient id="caGold" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#F5B000" />
            <stop offset="50%" stopColor="#F8C437" />
            <stop offset="100%" stopColor="#D49600" />
          </linearGradient>
          <linearGradient id="caGoldText" x1="0" y1="0" x2="0" y2="100">
            <stop offset="0%" stopColor="#F8C437" />
            <stop offset="100%" stopColor="#F5B000" />
          </linearGradient>
        </defs>
      </svg>
    </MotionWrapper>
  );
}
