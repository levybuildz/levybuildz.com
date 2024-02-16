'use client'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { placeholder } from '../../../shared/lib/placeholder'

export function ImageCard({ mobile = false }) {
  return (
    <Tilt
      className="w-fit overflow-hidden rounded-3xl shadow-2xl dark:shadow-black"
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glarePosition="all"
      glareBorderRadius="1.5rem"
      glareMaxOpacity={0.4}
      glareEnable
    >
      <Image
        src="https://github.com/levybuildz.png"
        height={460}
        width={460}
        alt="Levy Buildz's picture"
        className={`object-cover dark:brightness-75 ${
          !mobile && 'h-[30rem] w-96'
        }`}
        placeholder={placeholder(460, 460) as `data:image/${string}`}
        priority
      />
    </Tilt>
  )
}
