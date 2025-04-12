import { ComponentProps } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

const Link = ({ children, ...props }: ComponentProps<'a'>) => (
  <a
    {...props}
    className="inline-flex items-end gap-px hover:text-neutral-900 active:text-neutral-900 hover:dark:text-neutral-200 active:dark:text-neutral-200"
    target="_blank"
  >
    {children}
  </a>
)

const ArrowIcon = () => <ArrowUpRight size="1em" className="text-xs" />

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <div className="border-t border-neutral-300/30 py-11 dark:border-neutral-800/20">
      <div className="content-container m-auto flex items-center leading-none md:justify-between">
        <div className="hidden gap-4 text-neutral-500 dark:text-neutral-400 md:flex">
          <Link href="https://l.levybuildz.com/links" rel="links">
            <span>All My Links</span>
            <ArrowIcon />
          </Link>
          <Link href="/sitemap" rel="noreferrer">
            <span>Sitemap</span>
            <ArrowIcon />
          </Link>
          <Link href="/blog/feed" rel="noreferrer">
            <span>RSS</span>
            <ArrowIcon />
          </Link>
          <Link href="https://l.levybuildz.com/email" rel="external">
            <span>Contact</span>
            <ArrowIcon />
          </Link>
        </div>
        <div className="text-center text-sm text-neutral-400 dark:text-neutral-500 md:text-right">
          Copyright © {currentYear}{' '}
          <Link href="https://l.levybuildz.com/links" rel="external">
            Levy Buildz
          </Link>
          .
        </div>
      </div>
    </div>
  )
}
