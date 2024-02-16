'use client'

import { useEffect, useRef } from 'react'

import Script from 'next/script'

const SplineEmbed = () => {
  return (
    <div className="h-full w-full">
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.0.47/build/spline-viewer.js"
      ></Script>
      {/* @ts-ignore */}
      <spline-viewer url="https://prod.spline.design/4-T2PpGTrLACxGN0/scene.splinecode"></spline-viewer>
    </div>
  )
}

export default SplineEmbed
