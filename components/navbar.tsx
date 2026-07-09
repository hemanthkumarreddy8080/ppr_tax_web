'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './logo';
import { navLinks, contactInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass-nav py-3 shadow-lg shadow-navy-900/20'
            : 'bg-transparent py-5'
        )}
      >
        <nav className="container-ppr section-pad flex items-center justify-between">
          <a href="#home" aria-label="PPR Tax Consultancy Home">
            <Logo variant="light" />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-white/90 transition-colors hover:text-gold-300"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-400 to-gold-300 px-6 py-2.5 text-sm font-semibold text-navy-700 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:brightness-105"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Get Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-navy-900/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-navy-700 p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <Logo variant="light" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-gold-300"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-gold-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-full bg-gradient-to-r from-gold-400 to-gold-300 px-6 py-3 text-center text-sm font-semibold text-navy-700"
              >
                Get Consultation
              </a>
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70"
              >
                <Phone className="h-4 w-4 text-gold-300" />
                {contactInfo.phone}
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
