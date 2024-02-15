import { defineDocumentType } from 'contentlayer/source-files'

export const Manifesto = defineDocumentType(() => ({
  name: 'Manifesto',
  contentType: 'mdx',
  filePathPattern: 'manifesto.mdx'
}))
