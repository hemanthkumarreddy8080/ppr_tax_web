'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Gem, Star, Award, CheckCircle2 } from 'lucide-react';
import { CAEmblem } from '../ca-emblem';

const iconMap = {
  target: Target,
  eye: Eye,
  gem: Gem,
  star: Star,
};

const aboutCards = [
  {
    title: 'Our Mission',
    description:
      'To empower individuals and businesses with reliable, accurate and timely financial and tax services, enabling them to achieve compliance and financial success with confidence.',
    icon: 'target' as const,
  },
  {
    title: 'Our Vision',
    description:
      'To be the most trusted tax consultancy in India, recognised for our integrity, expertise and commitment to building long-term client relationships that span generations.',
    icon: 'eye' as const,
  },
  {
    title: 'Core Values',
    description:
      'Integrity, transparency, accuracy and dedication form the foundation of everything we do. We believe in doing right by our clients, every single time.',
    icon: 'gem' as const,
  },
  {
    title: 'Why Choose Us',
    description:
      'With 1000+ satisfied clients and 5+ years of experience, we combine deep expertise with personalised service to deliver results that exceed expectations.',
    icon: 'star' as const,
  },
];

const credentials = [
  'Chartered Accountant led practice',
  '1000+ clients across India',
  'End-to-end compliance management',
  'Confidential & secure handling',
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container-ppr section-pad relative">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              About Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl font-bold text-navy-700 sm:text-4xl lg:text-5xl"
          >
            A Trusted Financial Consultancy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-navy-600"
          >
            PPR Tax Consultancy is a premier financial advisory firm led by{' '}
            <span className="font-semibold text-navy-700">K. Umamaheswara Reddy, B.Com (CA)</span>,
            dedicated to providing comprehensive taxation, accounting and compliance services with
            unwavering integrity, transparency and a commitment to long-term client relationships.
          </motion.p>
        </div>

        {/* Founder card + CA Emblem */}
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl premium-shadow">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional accounting and audit workspace"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-700/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600">
                      <Award className="h-7 w-7 text-navy-700" />
                    </div>
                    <div>
                      <p className="font-serif text-lg font-bold text-white">
                        K. Umamaheswara Reddy
                      </p>
                      <p className="text-sm text-gold-300">B.Com (CA) — Founder & Lead Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CA Emblem floating */}
            <div className="absolute -right-4 -top-4 hidden sm:block">
              <CAEmblem size={80} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-bold text-navy-700">
              Expertise You Can Trust
            </h3>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              With over five years of dedicated practice, PPR Tax Consultancy has built a reputation
              for excellence in GST, Income Tax, Audit and corporate compliance. We serve
              individuals, startups, SMEs and established corporates with the same level of
              dedication and precision.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              Our approach combines deep technical knowledge with a genuine understanding of each
              client's unique circumstances, ensuring solutions that are not only compliant but
              also strategically aligned with your financial goals.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {credentials.map((cred, i) => (
                <motion.li
                  key={cred}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-sm font-medium text-navy-700"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-500" />
                  {cred}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mission / Vision / Values / Why Choose Us cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:premium-shadow"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-400/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-500 text-gold-300 transition-all duration-300 group-hover:from-gold-400 group-hover:to-gold-300 group-hover:text-navy-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 font-serif text-lg font-bold text-navy-700">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-600">
                    {card.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold-400 to-gold-300 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
