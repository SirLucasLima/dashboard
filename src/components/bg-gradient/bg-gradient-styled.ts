import styled, { createGlobalStyle, keyframes } from 'styled-components'

import type { InteractiveStyledProps } from './bg-gradient-types'

const moveInCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const moveVertical = keyframes`
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
`

const moveHorizontal = keyframes`
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
`

export const GlobalStyle = createGlobalStyle`
  :root {
    --color1: 46, 184, 138;
    --color2: 48, 121, 217;
    --color3: 197, 37%, 24%;
    --color4: 113, 48, 217;
    --color5: 242, 119, 142;
    --color-interactive: 242, 185, 15;
    --circle-size: 80%;
    --blending: hard-light;
  }
`

export const ChildrenContainer = styled.div`
  z-index: 10;
  pointer-events: none;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: start;
  align-items: center;
  user-select: none;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.1);
`

export const GradientBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;

  svg {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
  }

  .gradients-container {
    filter: url(#goo) blur(40px);
    width: 100%;
    height: 100%;
  }

  .g1 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color1), 0.8) 0,
        rgba(var(--color1), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: center center;
    animation: ${moveVertical} 30s ease infinite;

    opacity: 0.4;
  }

  .g2 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color2), 0.8) 0,
        rgba(var(--color2), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 400px);
    animation: ${moveInCircle} 20s reverse infinite;

    opacity: 0.4;
  }

  .g3 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color3), 0.8) 0,
        rgba(var(--color3), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2 + 200px);
    left: calc(50% - var(--circle-size) / 2 - 500px);

    transform-origin: calc(50% + 400px);
    animation: ${moveInCircle} 40s linear infinite;

    opacity: 0.4;
  }

  .g4 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color4), 0.8) 0,
        rgba(var(--color4), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 200px);
    animation: ${moveHorizontal} 40s ease infinite;

    opacity: 0.4;
  }
`

export const InteractiveBubble = styled.div<InteractiveStyledProps>`
  position: absolute;
  background: radial-gradient(
      circle at center,
      rgba(var(--color4), 0.8) 0,
      rgba(var(--color4), 0) 50%
    )
    no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size));
  left: calc(50% - var(--circle-size));

  transform: translate(${p => p.$x - 100}px, ${p => p.$y - 100}px);

  opacity: 0.4;
`
