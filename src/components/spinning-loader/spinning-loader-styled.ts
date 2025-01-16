import { Loader } from 'lucide-react'
import styled from 'styled-components'

import { spinAnimation } from './utils/spin-animation'

export const SpinningLoaderStyled = styled(Loader)`
  animation: ${spinAnimation} 1.5s linear infinite;
`
