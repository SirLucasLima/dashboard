import { ResponsiveMobileFirstStyled } from './responsive-mobile-first-styled'
import type { ResponsiveMobileFirstProps } from './responsive-mobile-first-types'

export const ResponsiveMobileFirst = ({ children }: ResponsiveMobileFirstProps) => {
  return <ResponsiveMobileFirstStyled>{children}</ResponsiveMobileFirstStyled>
}
