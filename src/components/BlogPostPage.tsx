import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogs';

export const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-black text-slate-900">Post Not Found</h1>
        <p className="mt-4 text-slate-600">The blog post you are looking for does not exist.</p>
        <Link to="/blog" className="mt-8 font-bold text-brand-blue hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      {/* Article Header */}
      <header className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link 
                to="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/80 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <div className="mb-4 inline-block rounded-full bg-brand-blue px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                {post.category}
              </div>
              <h1 className="text-4xl font-black text-white lg:text-5xl leading-tight">
                {post.title}
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">
                    {post.author[0]}
                  </div>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Main Content */}
          <main className="lg:col-span-8 py-16">
            <div 
              className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Social Share */}
            <div className="mt-16 border-t border-slate-100 pt-8">
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-slate-900 uppercase tracking-widest">Share this article</div>
                <div className="flex gap-4">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-colors hover:bg-brand-blue hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-colors hover:bg-brand-blue hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-colors hover:bg-brand-blue hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 py-16">
            <div className="sticky top-32 space-y-12">
              {/* Newsletter */}
              <div className="rounded-3xl bg-slate-50 p-8">
                <h3 className="text-xl font-bold text-slate-900">Subscribe to our Newsletter</h3>
                <p className="mt-2 text-sm text-slate-600">Get the latest compliance updates and business tips delivered to your inbox.</p>
                <form className="mt-6 space-y-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:ring-brand-blue"
                  />
                  <button className="w-full rounded-xl bg-brand-blue py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-700">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Related Posts */}
              <div>
                <h3 className="text-xl font-bold text-slate-900">Related Articles</h3>
                <div className="mt-6 space-y-6">
                  {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(related => (
                    <Link key={related.id} to={`/blog/${related.id}`} className="group flex gap-4">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <div className="mt-1 text-xs text-slate-500">{related.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
