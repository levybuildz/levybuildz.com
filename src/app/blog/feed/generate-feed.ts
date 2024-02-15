import { getSortedPosts } from '@/shared/lib/get-sorted-posts'
import { config } from 'global-config'
import { allPosts } from 'contentlayer/generated'
import { Feed } from 'feed'
import { markdownToHtml } from './markdown-to-html'

export function generateFeed() {
  const date = new Date()

  const posts = getSortedPosts(allPosts).filter(
    post => post.status === 'published'
  )

  const feed = new Feed({
    title: "Levy Buildz's interests",
    description:
      'This is my "corner of internet", where I take some tests, document my studies and write about some subjects I like...',
    id: config.webserver.host,
    link: config.webserver.host,
    favicon: `${config.webserver.host}/assets/brain.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Levy Buildz.`,
    updated: posts.length > 0 ? new Date(posts[0].date) : date,
    feedLinks: {
      rss2: `${config.webserver.host}/blog/feed`
    },
    docs: 'https://github.com/levybuildz/levybuildz.com',
    generator: 'Feed for Node.js',
    author: {
      name: 'Levy Buildz',
      email: 'contact@levybuildz.com',
      link: 'https://levybuildz.com'
    }
  })

  posts.forEach(async post => {
    const { name, email, url: authorLink } = post.author_info
    const link = `${config.webserver.host}/blog/post/${post.id}`

    feed.addItem({
      link,
      title: post.title,
      id: post.id,
      description: post.description,
      content: markdownToHtml(`![](${link}/thumbnail) ${post.body.raw}`),
      author: [{ name, email, link: authorLink }],
      date: new Date(post.date),
      category: post.tags.split(',').map(tag => ({ name: tag.trim() })),
      image: {
        url: `${link}/thumbnail`,
        type: 'image/png'
      }
    })
  })

  return feed.rss2()
}
