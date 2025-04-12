import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { KBarProvider, Action } from 'kbar'
import { useTheme } from 'next-themes'
import { allPosts, allProjects, allTILs } from 'contentlayer/generated'
import {
  Article,
  Briefcase,
  Code,
  Desktop,
  File,
  FileDashed,
  FolderOpen,
  Folder,
  GithubLogo,
  House,
  MagnifyingGlass,
  Moon,
  Note,
  Palette,
  PencilSimpleLine,
  Rss,
  Sun,
  Tag,
  TreeStructure,
  ChartLine,
  User,
  SquaresFour,
  Files,
  Books,
  ChartPieSlice,
  Notebook,
  InstagramLogo,
  Book,
  DiscordLogo,
  LinkedinLogo,
  NotionLogo,
  ShoppingCart,
  ShoppingCartSimple,
  EnvelopeSimple,
  TiktokLogo,
  Scroll
} from '@phosphor-icons/react/dist/ssr'
import { getSortedPosts } from '@/shared/lib/get-sorted-posts'
import { KBar } from '@/shared/components/kbar'
import { slug } from '@/shared/lib/slug'
import { getUniqueCategoryList } from '@/shared/lib/categories'
import { getUniqueTagListFromPosts } from '@/shared/lib/tags'

export function CustomKBarProvider({ children }: { children: ReactNode }) {
  const { push } = useRouter()
  const { setTheme } = useTheme()

  const navigationActions: Action[] = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['n', 'h'],
      keywords: 'homepage main',
      icon: <House size="1em" weight="duotone" />,
      perform: () => push('/')
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['n', 'a'],
      keywords: 'about me user information info',
      icon: <User size="1em" weight="duotone" />,
      perform: () => push('/about')
    },
    {
      id: 'manifesto',
      name: 'Manifesto',
      shortcut: ['n', 'm'],
      keywords: 'manifesto mission values',
      icon: <Scroll size="1em" weight="duotone" />,
      perform: () => push('/manifesto')
    },
    {
      id: 'statistics',
      name: 'Statistics',
      shortcut: ['n', 's'],
      keywords: 'statistics github spotify data',
      icon: <ChartPieSlice size="1em" weight="duotone" />,
      perform: () => push('/about/statistics')
    },
    {
      id: 'guestbook',
      name: 'Guestbook',
      shortcut: ['n', 'g'],
      keywords: 'presence list',
      icon: <Book size="1em" weight="duotone" />,
      perform: () => push('/guestbook')
    }
  ]

  const projectsAsActions: Action[] = allProjects.map(project => ({
    id: `out-${slug(project.title)}`,
    name: project.title,
    subtitle: project.description,
    keywords: [...project.tags, project.core_techs].toString(),
    section: 'Projects',
    icon: <SquaresFour size="1em" weight="duotone" />,
    parent: 'search-projects',
    get perform() {
      if (project.website) return () => window.open(project.website, '_blank')
      if (project.repository)
        return () => window.open(project.repository, '_blank')

      return undefined
    }
  }))
  const projectsActions: Action[] = [
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['p'],
      section: 'Projects',
      keywords: 'works projects tools apps',
      icon: <Briefcase size="1em" weight="duotone" />,
      perform: () => push('/projects')
    },
    {
      id: 'search-projects',
      name: 'Search project...',
      shortcut: ['p', 's'],
      section: 'Projects',
      keywords: 'works projects tools apps',
      icon: <MagnifyingGlass size="1em" weight="duotone" />
    },
    ...projectsAsActions
  ]

  const categoriesAsAction: Action[] = getUniqueCategoryList()
    .sort()
    .map(category => ({
      id: slug(category),
      name: category,
      icon: <Folder size="1em" weight="duotone" />,
      parent: 'categories',
      section: 'Blog',
      perform: () => push(`/blog/categories/${slug(category)}`)
    }))
  const tagsAsAction: Action[] = getUniqueTagListFromPosts()
    .sort()
    .map(tag => ({
      id: slug(tag),
      name: tag,
      icon: <Tag size="1em" weight="duotone" />,
      parent: 'tags',
      section: 'Blog',
      perform: () => push(`/blog/tag/${slug(tag)}`)
    }))

  const getIconByStatus = (status: 'published' | 'draft' | 'planned') => {
    if (status === 'published') return <Article size="1em" weight="duotone" />
    if (status === 'draft') return <FileDashed size="1em" weight="duotone" />
    if (status === 'planned')
      return <PencilSimpleLine size="1em" weight="duotone" />
  }
  const postsAsAction: Action[] = getSortedPosts(
    allPosts.filter(post => post.status !== 'planned')
  ).map(({ id, title, status, test, tags, description }) => ({
    id,
    name: title,
    icon: test ? <Code size="1em" weight="duotone" /> : getIconByStatus(status),
    keywords: tags
      .split(',')
      .map(tag => tag.trim())
      .toString()
      .replaceAll(',', ' '),
    parent: 'search-posts',
    subtitle: description,
    section: 'Blog',
    perform: () => push(`/blog/post/${id}`)
  }))
  const tilsAsAction: Action[] = allTILs.map(til => ({
    id: slug(til.title),
    name: til.title,
    icon: <Notebook size="1em" weight="duotone" />,
    keywords: til.tags
      .map(tag => tag.trim())
      .toString()
      .replaceAll(',', ' '),
    parent: 'search-posts',
    subtitle: til.description,
    section: 'Blog',
    perform: () => push(`/blog/til#${slug(til.title)}`)
  }))

  const blogActions: Action[] = [
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['b'],
      section: 'Blog',
      keywords: 'posts writing',
      icon: <Note size="1em" weight="duotone" />,
      perform: () => push('/blog')
    },
    {
      id: 'til',
      name: 'Today I Learned',
      shortcut: ['b', 'i'],
      section: 'Blog',
      keywords: 'writing learning progress skills',
      icon: <Notebook size="1em" weight="duotone" />,
      perform: () => push('/blog/til')
    },
    {
      id: 'categories',
      name: 'Categories',
      shortcut: ['b', 'c'],
      section: 'Blog',
      keywords: 'posts writing',
      icon: <FolderOpen size="1em" weight="duotone" />
    },
    ...categoriesAsAction,
    {
      id: 'tags',
      name: 'Tags',
      shortcut: ['b', 't'],
      section: 'Blog',
      keywords: 'posts writing',
      icon: <Tag size="1em" weight="duotone" />
    },
    ...tagsAsAction,
    {
      id: 'rss',
      name: 'Rss',
      section: 'Blog',
      keywords: 'feed rss atom',
      icon: <Rss size="1em" weight="duotone" />,
      perform: () => push('/blog/feed')
    },
    {
      id: 'search-posts',
      name: 'Search posts...',
      section: 'Blog',
      keywords: 'search posts write writing blog',
      shortcut: ['b', 's'],
      icon: <MagnifyingGlass size="1em" weight="duotone" />
    },
    ...postsAsAction,
    ...tilsAsAction
  ]

  const personalLinksActions: Action[] = [
    {
      id: 'instagram',
      name: 'Instagram',
      section: 'Personal Links',
      keywords: 'reels pictures videos',
      icon: <InstagramLogo size="1em" weight="duotone" />,
      perform: () => window.open('https://l.levybuildz.com/instagram', '_blank')
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      section: 'Personal Links',
      keywords: 'content video tiktoks',
      icon: <TiktokLogo size="1em" weight="duotone" />,
      perform: () => window.open('https://l.levybuildz.com/tiktok', '_blank')
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      section: 'Personal Links',
      keywords: 'professional network social profile',
      icon: <LinkedinLogo size="1em" weight="duotone" />,
      perform: () => window.open('https://l.levybuildz.com/linkedin', '_blank')
    },
    {
      id: 'discord-community',
      name: 'Discord Community',
      section: 'Personal Links',
      keywords: 'community network chat',
      icon: <DiscordLogo size="1em" weight="duotone" />,
      perform: () => window.open('https://l.levybuildz.com/discord', '_blank')
    },
    {
      id: 'second-brain',
      name: 'Second Brain',
      section: 'Personal Links',
      keywords: 'notion database resources tools',
      icon: <NotionLogo size="1em" weight="duotone" />,
      perform: () =>
        window.open('https://l.levybuildz.com/second-brain', '_blank')
    },
    {
      id: 'favorite-products',
      name: 'My Favorite Products',
      section: 'Personal Links',
      keywords: 'hardware software gear tech devices',
      icon: <ShoppingCartSimple size="1em" weight="duotone" />,
      perform: () =>
        window.open('https://l.levybuildz.com/favorite-products', '_blank')
    },
    {
      id: 'email',
      name: 'Email',
      section: 'Personal Links',
      keywords: 'contact partnership requests',
      icon: <EnvelopeSimple size="1em" weight="duotone" />,
      perform: () => window.open('https://l.levybuildz.com/email', '_blank')
    }
  ]
  const websiteInformationActions: Action[] = [
    {
      id: 'out-repo',
      name: 'Source code',
      section: 'Website',
      keywords: 'repo source github código fonte',
      icon: <GithubLogo size="1em" weight="duotone" />,
      perform: () =>
        window.open('https://github.com/levybuildz/levybuildz.com', '_blank')
    },
    {
      id: 'out-license',
      name: 'License',
      section: 'Website',
      keywords: 'mit gpl',
      icon: <File size="1em" weight="duotone" />,
      perform: () =>
        window.open(
          'https://github.com/levybuildz/levybuildz.com/blob/main/LICENSE',
          '_blank'
        )
    },
    {
      id: 'out-analytics',
      name: 'Analytics',
      section: 'Website',
      keywords: 'stats graph traffic',
      icon: <ChartLine size="1em" weight="duotone" />,
      perform: () =>
        window.open(
          'https://umami.levybuildz.com/share/sfFFT6xds17hczDQ/levybuildz.com',
          '_blank'
        )
    },
    {
      id: 'sitemap',
      name: 'Sitemap',
      section: 'Website',
      keywords: 'map links crawler',
      icon: <TreeStructure size="1em" weight="duotone" />,
      perform: () => push('/sitemap')
    }
  ]

  const themeActions: Action[] = [
    {
      id: 'set-theme',
      name: 'Change theme',
      icon: <Palette size="1em" weight="duotone" />,
      keywords: 'theme dark light',
      shortcut: ['c', 't'],
      section: 'Configurations'
    },
    {
      id: 'system-theme',
      name: 'System colors',
      icon: <Desktop size="1em" weight="duotone" />,
      parent: 'set-theme',
      keywords: 'theme dark light',
      perform: () => setTheme('system')
    },
    {
      id: 'dark-theme',
      name: 'Dark mode',
      icon: <Moon size="1em" weight="duotone" />,
      parent: 'set-theme',
      keywords: 'theme dark light',
      perform: () => setTheme('dark')
    },
    {
      id: 'light-theme',
      name: 'Light mode',
      icon: <Sun size="1em" weight="duotone" />,
      parent: 'set-theme',
      keywords: 'theme dark light',
      perform: () => setTheme('light')
    }
  ]

  const actions: Action[] = [
    ...navigationActions,
    ...blogActions,
    ...projectsActions,
    ...personalLinksActions,
    ...websiteInformationActions,
    ...themeActions
  ]

  return (
    <KBarProvider actions={actions}>
      <KBar />
      {children}
    </KBarProvider>
  )
}
