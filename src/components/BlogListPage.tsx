import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogs';

export const BlogListPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-tight text-white lg:text-7xl"
          >
            Insights & Guides
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-xl text-slate-400"
          >
            Stay updated with the latest in Indian business compliance, taxation, and startup ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <Link to={`/blog/${post.id}`} className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-blue backdrop-blur-sm">
                    {post.category}
                  </div>
                </Link>
                
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900 group-hover:text-brand-blue transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="mt-4 flex-1 text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-8 flex items-center justify-between border-t border-slate-50 pt-6">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xs">
                        {post.author[0]}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{post.author}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-all hover:gap-3"
                    >
                      Read More
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
