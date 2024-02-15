import React from 'react'
import type { Metadata } from 'next'

import { PostList } from '@/shared/components/post-list'

import {
  getUniqueCategoryList,
  getPostListOfCategory,
  getNormalCategoryString
} from '@/shared/lib/categories'
import { getSortedPosts } from '@/shared/lib/get-sorted-posts'
import { slug } from '@/shared/lib/slug'
import { FolderOpen } from '@phosphor-icons/react/dist/ssr'

interface Props {
  params: { category: string }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: getNormalCategoryString(params.category),
    description: `Posts about ${getNormalCategoryString(
      params.category
    )} category`
  }
}

export default function Page({ params }: Props) {
  const { category } = params

  const postList = getSortedPosts(getPostListOfCategory(slug(category)))

  return (
    <div className="content-container m-auto">
      <h1 className="mb-5 flex justify-center gap-2 text-2xl font-bold md:justify-start">
        <FolderOpen size="1em" weight="duotone" className="text-3xl" />
        {getNormalCategoryString(category)}
      </h1>
      <main>
        <PostList posts={postList} />
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  const categoryList = getUniqueCategoryList()

  return categoryList.map(category => ({ category: slug(category) }))
}
