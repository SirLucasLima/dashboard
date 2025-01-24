import styled, { css, keyframes } from 'styled-components'

const blink = keyframes`
  50% {
    opacity: 0;
  }
`

export const StyledPresentation = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    max-width: fit-content;
    overflow: hidden;

    .cursor {
      display: inline-block;
      animation: ${blink} 0.7s steps(1) infinite;
    }

    .wrapper-presentation {
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;

      > p {
        text-shadow:
          0 0 2px rgba(0, 0, 0, 0.2),
          0 0 4px rgba(0, 0, 0, 0.2),
          0 0 6px rgba(0, 0, 0, 0.2),
          0 0 8px rgba(0, 0, 0, 0.2);
        color: ${theme.colors.primaryForeground};
      }

      > h1 {
        text-shadow:
          0 0 2px rgba(0, 0, 0, 0.2),
          0 0 4px rgba(0, 0, 0, 0.2),
          0 0 6px rgba(0, 0, 0, 0.2),
          0 0 8px rgba(0, 0, 0, 0.2);
        line-height: 1;
        color: ${theme.colors.foreground};
        /* word-spacing: -0.3em;
        letter-spacing: -0.01em; */
      }

      > h2 {
        text-shadow:
          0 0 2px rgba(0, 0, 0, 0.2),
          0 0 4px rgba(0, 0, 0, 0.2),
          0 0 6px rgba(0, 0, 0, 0.2),
          0 0 8px rgba(0, 0, 0, 0.2);
        color: ${theme.colors['colorful-7']};
        line-height: 1;
        /* word-spacing: -0.2em;
        letter-spacing: -0.03em; */
      }

      > section {
        /* text-shadow:
          0 0 2px rgba(119, 50, 155, 0.2),
          0 0 4px rgba(119, 50, 155, 0.2),
          0 0 6px rgba(119, 50, 155, 0.2),
          0 0 8px rgba(119, 50, 155, 0.2); */
        color: ${theme.colors.secondaryForeground};
        line-height: 1;
        text-align: center;
        white-space: normal;
        overflow-wrap: break-word;
      }

      > a {
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        font-size: ${theme.typography.fontSize.md};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.primaryForeground};
        border-radius: ${theme.border['rounded-lg']};
        border: 1px solid ${theme.colors.ring};
        transition: transform 0.2s ease;
        &:active {
          transform: scale(0.98);
        }
        &::after {
          transform: scale(1);
        }
        box-shadow:
          0 0 2px rgba(0, 0, 0, 0.2),
          0 0 4px rgba(0, 0, 0, 0.2),
          0 0 6px rgba(0, 0, 0, 0.2),
          0 0 8px rgba(0, 0, 0, 0.2);
      }

      @media (min-width: ${theme.breakpoints.sm}) {
        > h1 {
          font-size: ${theme.typography.fontSize['4xl']};
          font-weight: ${theme.typography.fontWeight.bold};
        }

        > h2 {
          font-size: ${theme.typography.fontSize['lg']};
          font-weight: ${theme.typography.fontWeight.medium};
          word-spacing: -0.2em;
          letter-spacing: -0.03em;
        }

        > section {
          font-size: ${theme.typography.fontSize['xl']};
          font-weight: ${theme.typography.fontWeight.medium};
          max-width: 18rem;
        }

        > p,
        a {
          font-size: ${theme.typography.fontSize.xs};
          font-weight: ${theme.typography.fontWeight.normal};
        }
      }

      @media (min-width: ${theme.breakpoints.lg}) {
        > h1 {
          font-size: ${theme.typography.fontSize['5xl']};
          font-weight: ${theme.typography.fontWeight.bold};
        }

        > h2 {
          font-size: ${theme.typography.fontSize['2xl']};
          font-weight: ${theme.typography.fontWeight.semibold};
        }

        > section {
          font-size: ${theme.typography.fontSize['2xl']};
          font-weight: ${theme.typography.fontWeight.medium};
          max-width: 22rem;
        }

        > p,
        a {
          font-size: ${theme.typography.fontSize.md};
          font-weight: ${theme.typography.fontWeight.normal};
        }
      }
    }

    .wrapper-presentation:nth-of-type(2) {
      align-items: center;
      gap: 3rem;
    }
  `}
`
