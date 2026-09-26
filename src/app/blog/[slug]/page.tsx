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
        <h2 key={index} className="mt-12 text-2xl font-bold leading-snug text-navy-900">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="mt-9 text-xl font-semibold leading-snug text-navy-900">
          {block.text}
        </h3>
      );
    case "h4":
      return (
        <h4 key={index} className="mt-7 text-lg font-semibold leading-snug text-brand-700">
          {block.text}
        </h4>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="mt-6 rounded-r-xl border-l-4 border-brand-600 bg-brand-50/60 px-5 py-4 text-navy-800"
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
        <ol key={index} className="mt-4 list-decimal space-y-2 pl-6 text-ink-muted marker:text-brand-600">
          {items}
        </ol>
      ) : (
        <ul key={index} className="mt-4 list-disc space-y-2 pl-6 text-ink-muted marker:text-brand-600">
          {items}
        </ul>
      );
    }
    default:
      return (
        <p key={index} className="mt-5 leading-[1.75] text-ink-muted">
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
        <header className="bg-navy-900 pb-14 pt-32 text-white">
          <div className="container-page max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All articles
            </Link>

            <p className="mt-6">
              <span className="inline-block rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-brand-200">
                {post.category}
              </span>
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">{post.title}</h1>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-navy-300">
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
        </header>

        <div className="bg-canvas py-14">
          <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="max-w-3xl">
              {headings.length > 2 ? (
                <nav aria-label="Table of contents" className="rounded-2xl border border-line bg-white p-6 lg:hidden">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-navy-900">On this page</h2>
                  <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                    {headings.map((heading) => (
                      <li key={heading}>{heading}</li>
                    ))}
                  </ul>
                </nav>
              ) : null}

              {post.blocks.map(renderBlock)}

              <div className="mt-14 rounded-2xl border border-line bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">About the author</p>
                <h2 className="mt-2 text-lg font-semibold text-navy-900">{post.author}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {post.author} writes about brokerage technology, white-label trading platforms, CRM and risk
                  management for the WhitePlus Solution team.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-line bg-white p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-navy-900">Recent blogs</h2>
                <ul className="mt-4 space-y-4">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="block text-sm font-medium leading-snug text-navy-800 transition-colors hover:text-brand-700"
                      >
                        {item.title}
                      </Link>
                      <p className="mt-1 text-xs text-ink-muted">{item.date}</p>
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
