import { Metadata } from 'next'
import { AboutMe } from './sections/about-me'
import { Contact } from './sections/contact'
import { Knowledge } from './sections/knowledge'
import { StatisticsGrid } from './sections/statistics'

import './styles.css'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Information about Levy Buildz, their knowledge, statistics about him and social links.',
  keywords: ['about', 'social', 'links', 'knowledge']
}

export const revalidate = 3600 // 1h

export default function Page() {
  return (
    <div className="content-container m-auto space-y-32">
      <AboutMe />
      <Knowledge />
      <StatisticsGrid />
      <Contact />
    </div>
  )
}
