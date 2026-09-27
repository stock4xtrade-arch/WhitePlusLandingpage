import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, UserRound } from "lucide-react";

import { BlogCta } from "@/components/sections/blog-cta";
import { posts } from "@/content/posts";
import type { Block } from "@/content/types";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={index} className="mt-12 text-[1.6rem] font-medium leading-snug text-ink">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="mt-9 text-xl font-medium leading-snug text-ink">
          {block.text}
        </h3>
      );
    case "h4":
      return (
        <h4 key={index} className="mt-7 text-[17px] font-medium leading-snug text-ink">
          {block.text}
        </h4>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="mt-6 rounded-[18px] border border-line bg-surface-soft px-6 py-5 text-[15px] leading-relaxed text-ink-soft"
        >
          {block.text}
        </blockquote>
      );
    case "list": {
      const items = block.items.map((item) => (
        <li key={item} className="leading-relaxed">
          {item}
        </li>
      ));
      return block.ordered ? (
        <ol key={index} className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-[1.7] text-ink-muted marker:text-ink-faint">
          {items}
        </ol>
      ) : (
        <ul key={index} className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.7] text-ink-muted marker:text-ink-faint">
          {items}
        </ul>
      );
    }
    default:
      return (
        <p key={index} className="mt-5 text-[15px] leading-[1.8] text-ink-muted">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const headings = post.blocks.flatMap((block) => (block.type === "h2" ? [block.text] : []));

  return (
    <>
      <article>
        <header className="p-2 sm:p-3">
          <div className="rounded-[22px] bg-slate-ink px-6 py-16 text-white sm:px-12 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All articles
            </Link>

            <p className="mt-6">
              <span className="inline-block rounded-full border border-white/12 px-3 py-1 text-[11px] font-medium text-white/65">
                {post.category}
              </span>
            </p>

            <h1 className="mt-4 text-[2rem] font-medium leading-[1.08] sm:text-[2.5rem] lg:text-[3rem]">{post.title}</h1>

            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/50">
              <li className="flex items-center gap-1.5">
                <UserRound className="size-4" aria-hidden="true" />
                {post.author}
              </li>
              <li className="flex items-center gap-1.5">
                <CalendarDays className="size-4" aria-hidden="true" />
                {post.date}
              </li>
              <li className="flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden="true" />
                {post.readTime}
              </li>
            </ul>
          </div>
          </div>
        </header>

        <div className="py-16">
          <div className="container-inner grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="max-w-3xl">
              {headings.length > 2 ? (
                <nav aria-label="Table of contents" className="rounded-[22px] border border-line bg-surface-soft p-6 lg:hidden">
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">On this page</h2>
                  <ul className="mt-3 space-y-2 text-[14px] text-ink-muted">
                    {headings.map((heading) => (
                      <li key={heading}>{heading}</li>
                    ))}
                  </ul>
                </nav>
              ) : null}

              {post.blocks.map(renderBlock)}

              <div className="mt-14 rounded-[22px] border border-line bg-surface-soft p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">About the author</p>
                <h2 className="mt-3 text-[17px] font-medium text-ink">{post.author}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                  {post.author} writes about brokerage technology, white-label trading platforms, CRM and risk
                  management for the WhitePlus Solution team.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[22px] border border-line bg-surface-soft p-7">
                <h2 className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">Recent blogs</h2>
                <ul className="mt-4 space-y-4">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="block text-[14px] font-medium leading-snug text-ink transition-colors hover:text-ink-muted"
                      >
                        {item.title}
                      </Link>
                      <p className="mt-1 text-[12px] text-ink-faint">{item.date}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <BlogCta />
    </>
  );
}
