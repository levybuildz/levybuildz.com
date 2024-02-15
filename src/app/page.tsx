import Image from 'next/image'

import { Typewriter } from './components/typewriter'
import { StartButton } from './components/start-button'

import deconstructedRobotBroLight from './components/deconstructed-robot-bro-light.svg'
import deconstructedRobotBroDark from './components/deconstructed-robot-bro-dark.svg'
import SplineEmbed from './components/spline-embed'

export default function Page() {
  return (
    <div className="content-container relative m-auto mb-10 flex min-h-screen flex-col items-center justify-between py-10">
      <div className="absolute h-full w-full bg-fixed bg-center bg-no-repeat opacity-10 dark:opacity-5 md:hidden">
        <SplineEmbed />
      </div>
      <div />
      <div className="flex w-full items-center justify-center gap-12 md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="w-min text-7xl font-bold text-black dark:text-neutral-50 md:w-max">
            Levy Buildz,
          </span>
          <span className="flex items-center text-2xl text-neutral-400 md:text-3xl ">
            <Typewriter
              words={['Builder', 'Critical Thinker', 'Entrepreneur']}
              cursor
            />
          </span>
        </div>
        <div className="hidden aspect-square flex-1 items-center justify-end md:flex ">
          <SplineEmbed />
        </div>
      </div>
      <StartButton />
    </div>
  )
}
