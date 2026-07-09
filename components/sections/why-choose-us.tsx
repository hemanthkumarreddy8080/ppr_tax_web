'use client';

import { motion } from 'framer-motion';
import {
  Award,
  BadgePercent,
  Clock,
  ShieldCheck,
  Users,
  TrendingUp,
  Lock,
  Smile,
  type LucideIcon,
} from 'lucide-react';

const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  { title: 'Experienced Professionals', description: 'Led by K. Umamaheswara Reddy, B.Com (CA), with years of expertise in taxation and compliance.', icon: Award },
  { title: 'Transparent Pricing', description: 'Clear, upfront pricing with no hidden charges. You know exactly what you pay for.', icon: BadgePercent },
  { title: 'Timely Filing', description: 'We ensure all your filings and compliances are completed well before deadlines.', icon: Clock },
  { title: 'Complete Compliance', description: 'End-to-end compliance management so you never miss a statutory requirement.', icon: ShieldCheck },
  { title: 'Personalised Support', description: 'Dedicated support tailored to your specific business needs and circumstances.', icon: Users },
  { title: 'Modern Technology', description: 'Leveraging the latest tools and software for accurate, efficient service delivery.', icon: TrendingUp },
  { title: 'Strict Confidentiality', description: 'Your financial data is handled with the utmost security and confidentiality.', icon: Lock },
  { title: 'Customer Satisfaction', description: '98% client satisfaction rate — we go the extra mile to ensure you are happy.', icon: Smile },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-cream py-24">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gold-400/5 blur-[120px]" />

      <div className="container-ppr section-pad relative">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl font-bold text-navy-700 sm:text-4xl lg:text-5xl"
          >
            Why Choose PPR Tax Consultancy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-navy-600"
          >
            We combine deep expertise, modern technology and a client-first approach to deliver
            financial services that consistently exceed expectations.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:premium-shadow"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold-400/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-500 transition-all duration-300 group-hover:from-gold-400 group-hover:to-gold-300">
                  <reason.icon className="h-8 w-8 text-gold-300 transition-all duration-300 group-hover:text-navy-700" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-serif text-base font-bold text-navy-700">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-600">
                  {reason.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-gold-400 to-gold-300 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
