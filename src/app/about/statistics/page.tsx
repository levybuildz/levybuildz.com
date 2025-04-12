import { Metadata } from 'next'
import { PencilLine, AppleLogo } from '@phosphor-icons/react/dist/ssr'
import { Title } from '@/shared/components/title'
import { AppleMusicDashboard } from './components/spotify-dashboard'
import { WritingDashboard } from './components/writing-dashboard'
import { RenderDate } from './components/date'

export const metadata: Metadata = {
  title: 'Statistics',
  description: 'Updated statistics data about me and my tastes.',
  keywords: ['about', 'statistics', 'data']
}

export const revalidate = 3600 // 1h

export default function Page() {
  const date = new Date()

  return (
    <div className="content-container m-auto space-y-16">
      <Title text="Statistics" description={<RenderDate date={date} />} />
      <div className="space-y-5">
        <div className="flex w-full items-center justify-center gap-2 text-3xl font-semibold text-[#333] dark:text-[#f5f5f5] md:justify-start">
          <h2>Writing</h2>
          <PencilLine size="1em" weight="duotone" />
        </div>
        <WritingDashboard />
      </div>
      <div className="space-y-5">
        <div className="flex w-full items-center justify-center gap-2 text-3xl font-semibold text-[#FA573C] lg:justify-start">
          <h2>Apple Music</h2>
          <AppleLogo size="1em" weight="duotone" />
        </div>
        <AppleMusicDashboard />
      </div>
    </div>
  )
}
