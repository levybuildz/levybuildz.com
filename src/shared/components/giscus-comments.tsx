'use client'

import Giscus, { Theme, GiscusProps, Mapping } from '@giscus/react'
import { useAbsoluteTheme } from '@/shared/hooks/useAbsoluteTheme'

type Props = Omit<GiscusProps, 'repo' | 'repoId' | 'mapping' | 'theme'> & {
  mapping?: Mapping
  transparentDark?: boolean
}
export function GiscusComments({
  category = 'Post Comments',
  categoryId = 'DIC_kwDOEwnD6s4CZvWA',
  reactionsEnabled = '1',
  inputPosition = 'bottom',
  mapping = 'og:title',
  ...rest
}: Props) {
  const prefersColorScheme = useAbsoluteTheme()

  const theme: { [key: string]: Theme } = {
    dark: 'https://levybuildz.com/assets/giscus_dark.css',
    light: 'https://levybuildz.com/assets/giscus_light.css'
  }

  return (
    <Giscus
      repo="levybuildz/levybuildz.com"
      repoId="MDEwOlJlcG9zaXRvcnkzMTk0MDcwODI="
      mapping={mapping}
      emitMetadata="0"
      lang="en"
      category={category}
      categoryId={categoryId}
      reactionsEnabled={reactionsEnabled}
      inputPosition={inputPosition}
      theme={theme[prefersColorScheme]}
      {...rest}
    />
  )
}
