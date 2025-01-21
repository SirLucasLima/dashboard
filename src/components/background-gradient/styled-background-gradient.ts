import styled, { keyframes } from 'styled-components'

import type { StyledInteractiveProps } from './types-background-gradient'

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

export const StyledBackgroundGradient = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 0;
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
        ${({ theme }) => {
            const hsl = theme.colors.green.replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0.8)`
          }}
          0%,
        ${({ theme }) => {
            const hsl = theme.colors.green.replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0)`
          }}
          50%
      )
      no-repeat;
    mix-blend-mode: hard-light;

    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2);
    left: calc(50% - 80% / 2);

    transform-origin: center center;
    animation: ${moveVertical} 30s ease infinite;

    opacity: 0.4;
  }

  .g2 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        ${({ theme }) => {
            const hsl = theme.colors.blue.replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0.8)`
          }}
          0%,
        ${({ theme }) => {
            const hsl = theme.colors.blue.replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0)`
          }}
          50%
      )
      no-repeat;
    mix-blend-mode: hard-light;
    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2);
    left: calc(50% - 80% / 2);
    transform-origin: calc(50% - 400px);
    animation: ${moveInCircle} 20s reverse infinite;
    opacity: 0.4;
  }

  .g3 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        ${({ theme }) => {
            const hsl = theme.colors.orange.replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0.8)`
          }}
          0%,
        ${({ theme }) => {
            const hsl = theme.colors.orange.replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0)`
          }}
          50%
      )
      no-repeat;
    mix-blend-mode: hard-light;
    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2 + 200px);
    left: calc(50% - 80% / 2 - 500px);
    transform-origin: calc(50% + 400px);
    animation: ${moveInCircle} 40s linear infinite;
    opacity: 0.4;
  }

  .g4 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        ${({ theme }) => {
            const hsl = theme.colors.purple.replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0.8)`
          }}
          0%,
        ${({ theme }) => {
            const hsl = theme.colors.purple.replace('hsl(', '').replace(')', '')
            return `hsla(${hsl}, 0)`
          }}
          50%
      )
      no-repeat;
    mix-blend-mode: hard-light;
    width: 80%;
    height: 80%;
    top: calc(50% - 80% / 2);
    left: calc(50% - 80% / 2);
    transform-origin: calc(50% - 200px);
    animation: ${moveHorizontal} 40s ease infinite;
    opacity: 0.4;
  }
`

export const InteractiveBubble = styled.div<StyledInteractiveProps>`
  position: absolute;
  background: radial-gradient(
      circle at center,
      ${({ theme }) => {
          const hsl = theme.colors.rose.replace('hsl(', '').replace(')', '')
          return `hsla(${hsl}, 0.8)`
        }}
        0%,
      ${({ theme }) => {
          const hsl = theme.colors.rose.replace('hsl(', '').replace(')', '')
          return `hsla(${hsl}, 0)`
        }}
        50%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  width: 80%;
  height: 80%;
  top: calc(50% - 80%);
  left: calc(50% - 80%);
  transform: translate(${p => p.$x - 100}px, ${p => p.$y - 100}px);
  opacity: 0.4;
`
