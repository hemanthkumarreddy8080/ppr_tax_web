'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { CAEmblem } from '../ca-emblem';
import { contactInfo } from '@/lib/data';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please enter your message'),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  'Income Tax Returns',
  'GST Registration / Returns',
  'Accounting & Bookkeeping',
  'Audit Services',
  'Company / LLP Registration',
  'MSME Registration',
  'Payroll Services',
  'TDS Returns',
  'Business Advisory',
  'Other',
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    // Simulate submission (EmailJS would be configured here)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-700 py-24">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-gold-400/5 blur-[120px]" />

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
              Get in Touch
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Start Your Free Consultation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-white/60"
          >
            Reach out to us for expert guidance on any tax, accounting or compliance matter. We
            respond within 24 hours.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Info cards */}
            <div className="space-y-4">
              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-gold-400/30 hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-300 text-navy-700">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">Call Us</p>
                  <p className="mt-1 font-serif text-lg font-bold text-white">{contactInfo.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-gold-400/30 hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-300 text-navy-700">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">Email Us</p>
                  <p className="mt-1 break-all font-serif text-sm font-bold text-white">{contactInfo.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-300 text-navy-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">Visit Us</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-300 text-navy-700">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">Business Hours</p>
                  <ul className="mt-2 space-y-1">
                    {contactInfo.hours.map((h) => (
                      <li key={h.day} className="flex justify-between text-sm text-white/70">
                        <span>{h.day}</span>
                        <span className="text-white/50">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={`https://wa.me/${contactInfo.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-5 transition-all duration-300 hover:bg-[#25D366]/15"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="h-6 w-6" fill="white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#25D366]">WhatsApp</p>
                  <p className="mt-1 font-serif text-lg font-bold text-white">Chat with us</p>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src={contactInfo.mapEmbed}
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PPR Tax Consultancy Location"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:p-10">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-400/5 blur-2xl" />
              <div className="mb-6 flex items-center gap-4">
                <CAEmblem size={56} />
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Send Us a Message</h3>
                  <p className="text-sm text-white/50">We'll get back to you within 24 hours</p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-gold-400" />
                  <h4 className="mt-4 font-serif text-xl font-bold text-white">Message Sent!</h4>
                  <p className="mt-2 text-sm text-white/60">
                    Thank you for reaching out. We'll respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gold-300">
                        Full Name
                      </label>
                      <input
                        {...register('name')}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold-400/50 focus:bg-white/10"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gold-300">
                        Email
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold-400/50 focus:bg-white/10"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gold-300">
                        Phone
                      </label>
                      <input
                        {...register('phone')}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold-400/50 focus:bg-white/10"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gold-300">
                        Service Needed
                      </label>
                      <select
                        {...register('service')}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-gold-400/50 focus:bg-white/10"
                      >
                        <option value="" className="bg-navy-700">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s} className="bg-navy-700">
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gold-300">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold-400/50 focus:bg-white/10"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-400 to-gold-300 px-8 py-4 text-sm font-semibold text-navy-700 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 disabled:opacity-60"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
