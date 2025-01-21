import styled, { css } from 'styled-components'

export const StyledPresentation = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 29rem;
    overflow: hidden;

    .wrapper-presentation {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;

      > p {
        font-size: ${theme.typography.fontSize.lg};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.lg};
        text-shadow: 0px 0.3px 0.3px ${theme.colors.shadow};
        color: ${theme.colors.primaryForeground};
      }

      > h1 {
        font-size: ${theme.typography.fontSize['6xl']};
        font-weight: ${theme.typography.fontWeight.bold};
        text-shadow: 0px 0.3px 0.3px ${theme.colors.shadow};
        line-height: 1;
        color: ${theme.colors.foreground};
        word-spacing: -0.3em;
        letter-spacing: -0.03em;
      }

      > h2 {
        font-size: ${theme.typography.fontSize['3xl']};
        font-weight: ${theme.typography.fontWeight.medium};
        text-shadow: 0px 0.3px 0.3px ${theme.colors.shadow};
        color: ${theme.colors.purple};
        line-height: 1;
        word-spacing: -0.2em;
        letter-spacing: -0.03em;
      }

      > section {
        font-size: ${theme.typography.fontSize['3xl']};
        font-weight: ${theme.typography.fontWeight.medium};
        text-shadow: 0px 0.3px 0.3px ${theme.colors.shadow};
        color: ${theme.colors.primaryForeground};
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
        padding: 1rem 2rem;
        font-size: ${theme.typography.fontSize.xl};
        background-color: ${theme.colors.purple};
        color: ${theme.colors.foreground};
        border-radius: ${theme.border['rounded-lg']};
        transition: transform 0.2s ease;
        &:active {
          transform: scale(0.98);
        }
        &::after {
          transform: scale(1);
        }
        box-shadow: 0px 1px 4px ${theme.colors.shadow};
      }
    }

    .wrapper-presentation:nth-of-type(2) {
      align-items: center;
      gap: 2rem;
    }
  `}
`
