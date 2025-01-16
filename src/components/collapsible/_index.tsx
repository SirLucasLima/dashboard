import { CollapsibleInner, CollapsibleWrapper } from './collapsible-styled'
import { type CollapsibleProps, defaultAnimationValues } from './collapsible-types'

export const Collapsible = ({
  open,
  animation = defaultAnimationValues,
  children,
}: CollapsibleProps) => {
  return (
    <CollapsibleWrapper $open={open} $animation={animation}>
      <CollapsibleInner>{children}</CollapsibleInner>
    </CollapsibleWrapper>
  )
}
