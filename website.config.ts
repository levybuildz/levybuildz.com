export const config = {
  metadata: {
    title: 'Levy Buildz',
    description:
      "A building block for insightful blogs, innovative projects, and invaluable resources meant to enhance life's journey. Here, every piece of content is designed to encourage building the life you want for yourself, connect and simplify different perspectives, and honor the multifaceted nature of humanity. Levy Buildz serves as an advocate for builders, thinkers, and dreamers committed to living life to its fullest."
  },
  webserver: {
    host: process.env.HOST ?? 'http://localhost:3000'
  }
}
