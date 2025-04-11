export const config = {
  metadata: {
    title: 'Levy Buildz',
    description:
      'Dive into my world of learning and building! Explore my projects, blog posts, and get insights into my entrepreneurial journey...'
  },
  webserver: {
    host: process.env.HOST ?? 'http://localhost:3000'
  }
}
