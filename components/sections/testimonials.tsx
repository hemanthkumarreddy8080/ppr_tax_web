'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-navy-700 py-24">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-gold-400/5 blur-[120px]" />

      <div className="container-ppr section-pad relative">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-white/60"
          >
            The trust and appreciation of our clients is our greatest achievement. Here's what they
            have to say about PPR Tax Consultancy.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:border-gold-400/30 hover:bg-white/[0.08]"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-gold-400/15" fill="currentColor" />

              <div className="relative">
                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 text-gold-400" fill="currentColor" />
                  ))}
                </div>

                {/* Text */}
                <p className="mb-6 text-sm leading-relaxed text-white/70">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-serif text-sm font-bold text-navy-700">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-serif text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>

                {/* Service tag */}
                <div className="mt-4 inline-flex rounded-full border border-gold-400/20 bg-gold-400/5 px-3 py-1 text-xs font-medium text-gold-300">
                  {t.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
