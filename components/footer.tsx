'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Logo } from './logo';
import { CAEmblem } from './ca-emblem';
import { contactInfo, navLinks, services } from '@/lib/data';

export function Footer() {
  const topServices = services.slice(0, 8);

  return (
    <footer className="relative overflow-hidden bg-navy-700 pt-20">
      {/* Decorative top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container-ppr section-pad relative">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <Logo variant="light" />
              <div className="h-12 w-px bg-gold-400/30" />
              <CAEmblem size={56} animated={false} />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              PPR Tax Consultancy is a trusted financial consultancy led by K. Umamaheswara Reddy, B.Com (CA), providing comprehensive GST, Income Tax, Accounting, Audit and Compliance services across India.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-gold-400/50 hover:bg-gold-400/10 hover:text-gold-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 font-serif text-sm font-bold uppercase tracking-wider text-gold-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold-300"
                  >
                    <ArrowRight className="h-3 w-3 text-gold-400/50 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 font-serif text-sm font-bold uppercase tracking-wider text-gold-300">
              Our Services
            </h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {topServices.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold-300"
                  >
                    <ArrowRight className="h-3 w-3 text-gold-400/50 transition-transform group-hover:translate-x-1" />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 font-serif text-sm font-bold uppercase tracking-wider text-gold-300">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span className="text-sm leading-relaxed text-white/60">
                  {contactInfo.address}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold-300"
                >
                  <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold-300"
                >
                  <Mail className="h-5 w-5 shrink-0 text-gold-400" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span className="text-sm text-white/60">
                  Mon – Sat: 9:30 AM – 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © 2026 PPR TAX CONSULTANCY. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="transition-colors hover:text-gold-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-gold-300">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-gold-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
