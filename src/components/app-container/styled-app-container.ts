import styled, { css } from 'styled-components'
import { keyframes } from 'styled-components'

const genieOpen = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.1);
    opacity: 0;
    /* Optional: start with a distorted shape using clip-path */
    clip-path: ellipse(10% 30% at 50% 50%);
  }
  60% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 1;
    clip-path: ellipse(120% 120% at 50% 50%);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    clip-path: none;
  }
`

// animation: ${isClosing ? genieClose : genieOpen} 1s ease-out forwards;
// const genieClose = keyframes`
//   0% {
//     transform: translate(-50%, -50%) scale(1);
//     opacity: 1;
//     clip-path: none;
//   }
//   40% {
//     transform: translate(-50%, -50%) scale(1.05);
//     opacity: 1;
//     clip-path: ellipse(120% 120% at 50% 50%);
//   }
//   100% {
//     transform: translate(-50%, -50%) scale(0.1);
//     opacity: 0;
//     clip-path: ellipse(10% 30% at 50% 50%);
//   }
// `

export const StyledAppContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    height: 100%;
    max-height: 50rem;
    width: 100%;
    overflow: hidden;
    overflow: hidden;

    backdrop-filter: blur(200px);
    border-radius: ${theme.border['rounded-lg']};
    border: 1px solid ${({ theme }) => theme.colors.ring};
    box-shadow: 0px 2px 4px ${theme.colors.shadow};

    /* Pseudo-element for backdrop effect */
    &::before {
      content: '';
      position: absolute;
      left: -10px;
      top: -10px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      z-index: -1;
      background-size: 100vw auto;
      filter: blur(10px);
    }

    /* Pseudo-element for overlay */
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      opacity: 0.6;
      background: ${theme.colors.primary};
    }

    /* Responsive breakpoints */
    @media (min-width: ${theme.breakpoints.sm}) {
      max-width: ${theme.breakpoints.sm};
    }

    @media (min-width: ${theme.breakpoints.md}) {
      max-width: ${theme.breakpoints.md};
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      max-width: ${theme.breakpoints.lg};
    }

    @media (min-width: ${theme.breakpoints.xl}) {
      /* max-width: ${theme.breakpoints.xl}; */
      max-width: 1480px;
      aspect-ratio: 16 / 9;
    }

    animation: ${genieOpen} 1s ease-out forwards;
  `}
`
