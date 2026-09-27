import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      <section className="p-2 sm:p-3">
        <div className="rounded-[22px] bg-slate-ink px-6 py-20 text-white sm:px-12 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">Insights</p>
            <h1 className="mt-5 text-[2rem] font-medium leading-[1.05] sm:text-[2.75rem] lg:text-[3.25rem]">
              {site.name} Blog: Trading Software Insights for Brokers
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-white/55">
              Practical guides on white-label trading platforms, brokerage technology, CRM and risk
              management, written for brokers who want to launch and scale faster.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-inner">
          <ul className="grid gap-2.5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="group flex h-full flex-col rounded-[22px] border border-line bg-surface-soft p-7 transition-colors duration-200 hover:border-ink/20">
                  <div className="flex items-center gap-2 text-[12px] text-ink-faint">
                    <span className="rounded-full bg-surface px-2.5 py-1 font-medium text-ink ring-1 ring-line">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="mt-6 text-[19px] font-medium leading-snug text-ink">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors group-hover:text-ink-muted"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-muted">{post.description}</p>

                  <span
                    aria-hidden="true"
                    className="mt-7 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink"
                  >
                    Read more
                    <ArrowUpRight className="size-4" />
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
