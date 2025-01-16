import { SpinningLoaderStyled } from './spinning-loader-styled'
import type { SpinningLoaderProps } from './spinning-loader-types'

export const SpinningLoader = ({ size }: SpinningLoaderProps) => {
  return <SpinningLoaderStyled size={size} />
}
