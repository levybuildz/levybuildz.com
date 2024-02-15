import { AppleLogo } from '@phosphor-icons/react/dist/ssr'
import { getLastFmTopArtists } from '@/shared/lib/lastFm'

import { Card } from '../card'

export async function TopArtist() {
  const topArtists = await getLastFmTopArtists()
  const mostListened = topArtists[0]

  return (
    <Card
      title="Top Artist"
      icon={<AppleLogo size="1em" weight="duotone" />}
      content={
        <a
          href={mostListened.url}
          target="_blank"
          title={mostListened.name}
          className="block overflow-hidden overflow-ellipsis whitespace-nowrap hover:underline"
        >
          {mostListened.name}
        </a>
      }
    />
  )
}
