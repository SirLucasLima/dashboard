interface Animation {
  duration: number
  ease: string
}

export interface CollapsibleProps {
  open: boolean
  animation?: Animation
  children: React.ReactNode
}

export interface StyledCollapsibleProps {
  $open: boolean
  $animation: Animation
}

export const defaultAnimationValues = {
  duration: 0.2,
  ease: 'ease-in-out',
}
