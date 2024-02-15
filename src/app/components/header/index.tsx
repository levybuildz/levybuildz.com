'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ToggleTheme } from './toggle-theme'
import { MobileMenu } from './mobile-menu'
import { Search } from './search'

import signatureDark from './signature-dark.png'
import signatureLight from './signature-light.png'

export function Header() {
  const [percentScrollPosition, setPercentScrollPosition] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScrollValue, setMaxScrollValue] = useState(0)

  function handleScroll() {
    if (window) {
      setScrollPosition(window.scrollY)
    }
    if (document) {
      setMaxScrollValue(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      )
    }
  }

  useEffect(() => {
    handleScroll()

    if (window) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
  }, [])

  useEffect(() => {
    setPercentScrollPosition(
      Math.round((scrollPosition / maxScrollValue) * 100)
    )
  }, [scrollPosition, maxScrollValue])

  const MenuItem: React.FC<{ name: string; path: string }> = ({
    name,
    path
  }) => (
    <Link
      href={path}
      className="rounded-lg p-2 leading-none text-neutral-700 hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-300 hover:dark:bg-neutral-950 dark:hover:text-neutral-100"
    >
      {name}
    </Link>
  )

  return (
    <header
      data-on-top={percentScrollPosition === 0}
      className="fixed left-3 right-3 top-3 z-40 rounded-xl border border-neutral-100 bg-neutral-50/80 py-3 backdrop-blur transition-all dark:border-neutral-900 dark:bg-neutral-1000/80 md:left-0 md:right-0 md:top-0 md:w-full md:rounded-none md:border-x-0 md:border-b md:border-t-0 data-[on-top='false']:md:border-b-neutral-100 data-[on-top='true']:md:border-b-transparent data-[on-top='true']:md:py-6 data-[on-top='false']:md:dark:border-b-neutral-900/80"
    >
      <div className="content-container m-auto flex flex-wrap items-center justify-between">
        <div className="md:hidden" />
        <Link href="/">
          <Image
            src={signatureDark}
            alt="Levy Buildz"
            className="w-10 dark:hidden"
          />
          <Image
            src={signatureLight}
            alt="Levy Buildz"
            className="hidden w-10 dark:block"
          />
        </Link>
        <div className="hidden flex-wrap items-center justify-center gap-8 md:flex">
          <nav className="flex flex-wrap items-center justify-center gap-5">
            <MenuItem name="Home" path="/" />
            <MenuItem name="Blog" path="/blog" />
            <MenuItem name="Projects" path="/projects" />
            <MenuItem name="About" path="/about" />
            <MenuItem name="Manifesto" path="/manifesto" />
          </nav>
          <div className="flex w-full items-center gap-8 md:w-auto">
            <Search />
            <ToggleTheme />
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}
