'use client';

import { motion } from 'framer-motion';
import {
  Receipt,
  Calculator,
  TrendingUp,
  FileText,
  Building2,
  Wallet,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { CAEmblem } from '../ca-emblem';
import { Counter } from '../counter';
import { stats } from '@/lib/data';

const floatingIcons = [
  { Icon: Receipt, className: 'top-[18%] left-[6%]', delay: 0 },
  { Icon: Calculator, className: 'top-[22%] right-[8%]', delay: 0.4 },
  { Icon: TrendingUp, className: 'bottom-[35%] left-[4%]', delay: 0.8 },
  { Icon: FileText, className: 'bottom-[25%] right-[6%]', delay: 1.2 },
  { Icon: Building2, className: 'top-[55%] left-[3%]', delay: 1.6 },
  { Icon: Wallet, className: 'top-[45%] right-[3%]', delay: 2.0 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-navy-700"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-900 to-navy-700" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-700" />

      {/* Golden glow orbs */}
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gold-400/10 blur-[120px]" />
      <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-navy-500/20 blur-[120px]" />

      {/* Floating finance icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.8 }}
          className={`absolute hidden lg:block ${className}`}
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay }}
          >
            <Icon className="h-12 w-12 text-gold-400/30" strokeWidth={1.2} />
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="container-ppr section-pad relative z-10 flex min-h-screen flex-col items-center justify-center pt-28 pb-16 text-center">
        {/* CA Emblem badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-4"
        >
          <CAEmblem size={72} />
          <div className="flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-5 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-gold-300" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-200">
              Trusted Since 2020
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Trusted <span className="gold-text">GST, Income Tax</span> & Accounting Experts
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          PPR Tax Consultancy provides reliable GST, Income Tax, Accounting, Audit, Registration, Payroll, Compliance, and Business Advisory services for individuals, startups, SMEs, and corporate clients across India — led by K. Umamaheswara Reddy, B.Com (CA).
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-400 to-gold-300 px-8 py-4 text-sm font-semibold text-navy-700 shadow-xl shadow-gold-500/25 transition-all duration-300 hover:shadow-gold-500/40 hover:brightness-105"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Get Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-gold-400/50 hover:bg-white/10"
          >
            Explore Services
            <ArrowRight className="h-4 w-4 text-gold-300 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Trust badge row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex items-center gap-2 text-xs text-white/40"
        >
          <ShieldCheck className="h-4 w-4 text-gold-400/60" />
          <span>ISO-grade compliance standards</span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="font-serif text-3xl font-bold gold-text sm:text-4xl">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gold-400/40 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
