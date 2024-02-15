import React from 'react'
import type { Metadata } from 'next'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'
import {
  Folder,
  CalendarBlank,
  Clock,
  Tag
} from '@phosphor-icons/react/dist/ssr'

import { allPosts, type Post } from 'contentlayer/generated'

import { slug } from '@/shared/lib/slug'
import { Date } from '@/shared/components/date'
import { GiscusComments } from '@/shared/components/giscus-comments'

import { TopButton } from './components/top-button'
import { Anchor } from './components/anchor'
import { PrettyCodeElement } from './components/pretty-code-element'

import 'katex/dist/katex.min.css'

interface Props {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const post = allPosts.find(post => post.id === params.slug) as Post

  return {
    title: post.title,
    description: post.description,
    authors: { name: post.author_info.name, url: post.author_info.url },
    keywords: post.tags.split(',').map(tag => tag.trim()),
    publisher: 'Levy Buildz <contact@levybuildz.com>',
    openGraph: {
      title: post.title,
      description: post.description,
      tags: post.tags.split(',').map(tag => tag.trim()),
      authors: 'Levy Buildz <contact@levybuildz.com>',
      type: 'article',
      url: `/blog/post/${params.slug}`,
      images: {
        url: `/blog/post/${post.id}/thumbnail`,
        width: 1200,
        height: 630
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: 'Levy Buildz <contact@levybuildz.com>',
      site: '/',
      images: {
        url: `/blog/post/${post.id}/thumbnail`,
        width: 1200,
        height: 630
      }
    }
  }
}

const mdxComponents: MDXComponents = {
  a: ({ children, href, ...props }) =>
    href?.startsWith('http') ? (
      <Anchor href={href} {...props}>
        {children}
      </Anchor>
    ) : (
      <a href={href}>{children}</a>
    ),
  div: PrettyCodeElement
}

export default function Page({ params }: Props) {
  const post = allPosts.find(post => post.id === params.slug) as Post

  const tags = post.tags.split(',').map(tag => tag.trim())
  const MDXContent = useMDXComponent(post.body.code)

  const author = post.author_info

  return (
    <div className="content-container m-auto">
      <div className="flex flex-col gap-4 leading-6">
        <div>
          <h1 className="text-center text-2xl font-bold md:text-left">
            {post.title}
          </h1>
          <div className="flex justify-center gap-2 text-neutral-600 dark:text-neutral-400 md:justify-start">
            <span>by</span>
            <Link
              href={`/blog/author/${author.user}`}
              className="cursor-pointer hover:text-black dark:hover:text-white"
            >
              {author.name} ({author.user})
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center gap-1">
                <CalendarBlank size="1em" />
                <Date dateString={post.date} />
              </span>
              {post.lastUpdate && (
                <span
                  className="inline-flex items-center gap-1 text-neutral-500"
                  title="Last Update"
                >
                  {'->'} <Date dateString={post.lastUpdate} />
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <span className="group inline-flex items-center gap-1">
                <Folder size="1em" />
                <Link
                  href={`/blog/categories/${slug(post.category)}`}
                  className="group-dark:hover:text-blue-400 group-hover:text-blue-500"
                >
                  {post.category}
                </Link>
              </span>
              <span className="group inline-flex items-center gap-1">
                <Clock size="1em" />
                <span>{Math.ceil(post.reading_time.minutes)} min read</span>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 gap-y-2">
            {tags.map((tag, index) => (
              <Link href={`/blog/tag/${slug(tag)}`} key={index}>
                <span className="flex items-center justify-center gap-1 rounded-md bg-neutral-500/5 p-1 leading-none text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100 md:bg-transparent md:p-0">
                  {tag} <Tag size={15} className="hidden md:inline" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="my-6 h-px w-full bg-neutral-500/50" />
      <div className="post-content">
        <MDXContent components={mdxComponents} />
      </div>
      <div className="pt-12">
        <GiscusComments />
      </div>
      <TopButton />
    </div>
  )
}

export async function generateStaticParams() {
  return allPosts
    .filter(post => post.status !== 'planned')
    .map(post => ({
      slug: post.id
    }))
}
