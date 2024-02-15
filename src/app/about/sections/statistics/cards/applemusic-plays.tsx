import { AppleLogo } from '@phosphor-icons/react/dist/ssr'

import { Card } from '../card'
import { getLastFmUserInfo } from '@/shared/lib/lastFm'

export async function AppleMusicPlays() {
  const { playcount } = await getLastFmUserInfo()

  return (
    <Card
      title="Apple Music Plays"
      icon={<AppleLogo size="1em" weight="duotone" />}
      content={playcount}
    />
  )
}
