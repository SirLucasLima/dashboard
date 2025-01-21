import { StyledAppContainer } from './styled-app-container'
import type { AppContainerProps } from './types-app-container'

export const ResponsiveMobileFirst = ({ children }: AppContainerProps) => {
  return <StyledAppContainer>{children}</StyledAppContainer>
}
