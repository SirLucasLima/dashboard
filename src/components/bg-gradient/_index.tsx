import React, { useState } from 'react'

import { GlobalStyle, GradientBg, InteractiveBubble } from './bg-gradient-styled'

export const BackgroundGradient = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <GlobalStyle />

      <GradientBg onMouseMove={handleMouseMove}>
        <svg>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 30 -10"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradients-container">
          <div className="g1" />
          <div className="g2" />
          <div className="g3" />
          <div className="g4" />

          <InteractiveBubble $x={mousePos.x} $y={mousePos.y} />
        </div>
      </GradientBg>

      {/* <ChildrenContainer>{children}</ChildrenContainer> */}
    </>
  )
}
