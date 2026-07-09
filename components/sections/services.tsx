'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

const categories = ['All', 'Taxation', 'GST', 'Accounting', 'Audit', 'Registration', 'Licenses', 'Documentation', 'Payroll & Labour', 'Certification', 'Advisory'];

export function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative overflow-hidden bg-navy-700 py-24">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gold-400/5 blur-[120px]" />

      <div className="container-ppr section-pad relative">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Our Services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Comprehensive Financial Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-white/60"
          >
            From GST and Income Tax to company registration and audit services, we offer a complete
            suite of financial and compliance solutions tailored to your needs.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300',
                activeCategory === cat
                  ? 'bg-gradient-to-r from-gold-400 to-gold-300 text-navy-700 shadow-lg shadow-gold-500/20'
                  : 'border border-white/10 bg-white/5 text-white/60 hover:border-gold-400/30 hover:text-gold-300'
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Service cards grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-gold-400/40 hover:bg-white/[0.08]"
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-400/0 blur-2xl transition-all duration-500 group-hover:bg-gold-400/15" />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-navy-700 text-gold-300 transition-all duration-300 group-hover:from-gold-400 group-hover:to-gold-300 group-hover:text-navy-700">
                    <service.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 font-serif text-base font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-gold-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn More
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gold-400 to-gold-300 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-sm text-white/50">
            Don't see what you're looking for? We offer many more specialised services.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-300 px-7 py-3.5 text-sm font-semibold text-navy-700 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40"
          >
            Request a Custom Service
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
