import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { posts } from "@/content/posts";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} Blog: Trading Software Insights for Brokers`,
  description:
    "Practical guides on white-label trading platforms, brokerage technology, CRM and risk management, written for brokers who want to launch and scale faster.",
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-navy-900 pb-16 pt-32 text-white">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Insights</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {site.name} Blog: Trading Software Insights for Brokers
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-300">
            Practical guides on white-label trading platforms, brokerage technology, CRM and risk management,
            written for brokers who want to launch and scale faster.
          </p>
        </div>
      </section>

      <section className="bg-canvas py-16 sm:py-20">
        <div className="container-page">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-brand-300">
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <span className="rounded-md bg-brand-50 px-2 py-1 font-semibold text-brand-700">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="mt-4 text-lg font-semibold leading-snug text-navy-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-brand-700 focus-visible:text-brand-700"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{post.description}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
                  >
                    Read more
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
