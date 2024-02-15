import { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allManifestos } from 'contentlayer/generated'
import { Title } from '@/shared/components/title'

export const metadata: Metadata = {
  title: 'Levy Buildz - Building a Richly Lived Life',
  description:
    'Discover Levy Buildz, a commitment to embracing life in all its forms. We build tools, resources, and communities to enrich the journey of life, fostering understanding and connectivity.',
  keywords: [
    'Levy Buildz',
    'life enrichment',
    'building community',
    'embracing diversity',
    'personal growth',
    'relationship building'
  ]
}

export default function Page() {
  const MDXManifestoContent = useMDXComponent(allManifestos[0].body.code)

  return (
    <div className="content-container m-auto">
      <Title text="Manifesto" />
      <div className="about-rendered-mdx flex flex-col gap-3 text-xl md:text-left">
        <MDXManifestoContent />
      </div>
    </div>
  )
}
