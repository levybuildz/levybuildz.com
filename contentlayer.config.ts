/* eslint-disable no-void */

import { makeSource } from 'contentlayer/source-files'

import { Post } from './content/definitions/Post'
import { Project } from './content/definitions/Project'
import { Til } from './content/definitions/Til'
import { AboutMe } from './content/definitions/AboutMe'
import { Manifesto } from './content/definitions/Manifesto'
import { remarkPlugins, rehypePlugins } from './content/plugin'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project, Til, AboutMe, Manifesto],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins,
    rehypePlugins: rehypePlugins as unknown as undefined
  }
})
