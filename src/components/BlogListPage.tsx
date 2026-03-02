import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogs';

export const BlogListPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-28 lg:py-36 bg-slate-950 text-white">

        {/* Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-blue/20 blur-[160px] rounded-full"></div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold tracking-tight lg:text-7xl"
          >
            Insights & Resources
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            Expert guides on Indian compliance, taxation, and startup growth —
            simplified for modern entrepreneurs.
          </motion.p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300"
              >

                {/* Image */}
                <Link to={`/blog/${post.id}`} className="relative h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold text-brand-blue shadow">
                    {post.category}
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">

                  {/* Meta */}
                  <div className="flex items-center gap-5 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-5 text-xl font-bold leading-snug text-slate-900 group-hover:text-brand-blue transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-4 flex-1 text-slate-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-8 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xs">
                        {post.author[0]}
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {post.author}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                  </div>
                </div>

              </motion.article>
            ))}

          </div>

        </div>
      </section>
    </div>
  );
};