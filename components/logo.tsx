'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type LogoProps = {
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
};

export function Logo({ variant = 'light', className, showText = true }: LogoProps) {
  const isLight = variant === 'light';
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <motion.div
        initial={{ rotate: -8, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative flex h-11 w-11 items-center justify-center"
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg" />
        <div className="absolute inset-[2px] rounded-[10px] bg-navy-700" />
        <span className="relative font-serif text-xl font-bold gold-text">PPR</span>
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-gold-400 ring-2 ring-navy-700" />
      </motion.div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              'font-serif text-lg font-bold tracking-wide',
              isLight ? 'text-white' : 'text-navy-700'
            )}
          >
            PPR TAX
          </span>
          <span
            className={cn(
              'text-[10px] font-semibold uppercase tracking-[0.25em]',
              isLight ? 'text-gold-300' : 'text-gold-500'
            )}
          >
            Consultancy
          </span>
        </div>
      )}
    </div>
  );
}
