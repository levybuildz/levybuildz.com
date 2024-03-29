import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode
}

export function Anchor({ children, href, ...props }: Props) {
  return (
    <a className="inline-flex items-end leading-none" href={href} {...props}>
      <span>{children}</span>
      <ArrowUpRight size="1em" className="text-xs" />
    </a>
  )
}
