import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogs';

export const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-black text-slate-900">Post Not Found</h1>
        <p className="mt-4 text-slate-600">
          The blog post you are looking for does not exist.
        </p>
        <Link
          to="/blog"
          className="mt-6 font-bold text-brand-blue hover:underline"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* ================= HEADER ================= */}
      <header className="relative h-[65vh] min-h-[420px] w-full overflow-hidden">

        {/* Background */}
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-5xl px-6 pb-16">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >

              <Link
                to="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">
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


      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

          {/* MAIN */}
          <main className="lg:col-span-8">

            <div
              className="prose prose-lg prose-slate max-w-none
              prose-headings:font-black
              prose-headings:text-slate-900
              prose-p:text-slate-600
              prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share */}
            <div className="mt-16 border-t border-slate-200 pt-8">
              <div className="flex items-center justify-between">

                <span className="text-sm font-bold uppercase tracking-widest text-slate-900">
                  Share this article
                </span>

                <div className="flex gap-3">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-brand-blue hover:text-white transition">
                    <Facebook className="h-5 w-5" />
                  </button>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-brand-blue hover:text-white transition">
                    <Twitter className="h-5 w-5" />
                  </button>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-brand-blue hover:text-white transition">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>

              </div>
            </div>

          </main>


          {/* SIDEBAR */}
          <aside className="lg:col-span-4">

            <div className="sticky top-32 space-y-12">

              {/* Newsletter */}
              <div className="rounded-3xl bg-slate-50 p-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Subscribe to our Newsletter
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Get the latest compliance updates and business tips delivered to your inbox.
                </p>

                <form className="mt-6 space-y-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:ring-brand-blue"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-blue py-3 text-sm font-bold text-white shadow hover:bg-blue-700 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Related */}
              <div>
                <h3 className="mb-6 text-xl font-bold text-slate-900">
                  Related Articles
                </h3>

                <div className="space-y-6">
                  {blogPosts
                    .filter((p) => p.id !== post.id)
                    .slice(0, 3)
                    .map((related) => (
                      <Link
                        key={related.id}
                        to={`/blog/${related.id}`}
                        className="group flex items-start gap-4"
                      >
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="h-full w-full object-cover transition-transform group-hover:scale-110"
                          />
                        </div>

                        <div>
                          <h4 className="line-clamp-2 text-sm font-bold text-slate-900 group-hover:text-brand-blue transition">
                            {related.title}
                          </h4>
                          <p className="mt-1 text-xs text-slate-500">
                            {related.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

            </div>
          </aside>

        </div>
      </section>

    </div>
  );
};