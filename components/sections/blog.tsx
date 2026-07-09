'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1, 7);

  return (
    <section id="blog" className="relative overflow-hidden bg-cream py-24">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="container-ppr section-pad relative">
        {/* Header */}
        <div className="mb-16 flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-4 py-1.5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Insights & Blog
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl font-bold text-navy-700 sm:text-4xl lg:text-5xl"
            >
              Expert Financial Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base leading-relaxed text-navy-600"
            >
              Stay informed with our latest articles on GST, Income Tax, accounting, compliance and
              business strategy.
            </motion.p>
          </div>
          <a
            href="#blog"
            className="group inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-semibold text-navy-700 transition-all duration-300 hover:border-gold-400 hover:bg-gold-400/5 hover:text-gold-600"
          >
            View All Articles
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm lg:grid-cols-2"
        >
          <div className="relative h-64 overflow-hidden lg:h-auto">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-300 px-3 py-1 text-xs font-bold text-navy-700">
              Featured
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <div className="mb-3 flex items-center gap-4 text-xs text-navy-500">
              <span className="rounded-full bg-navy-700/5 px-3 py-1 font-semibold text-navy-700">
                {featured.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {featured.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {featured.readTime}
              </span>
            </div>
            <h3 className="mb-4 font-serif text-2xl font-bold leading-tight text-navy-700">
              {featured.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-navy-600">
              {featured.excerpt}
            </p>
            <a
              href="#blog"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-300 px-6 py-3 text-sm font-semibold text-navy-700 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30"
            >
              Read Article
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Blog grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:premium-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-700/40 to-transparent" />
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-700 backdrop-blur-md">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-navy-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-base font-bold leading-snug text-navy-700 transition-colors group-hover:text-gold-600">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-600 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-gold-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Read More
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
