import { CollapsibleInner, StyledCollapsible } from './styled-collapsible'
import { type CollapsibleProps, defaultAnimationValues } from './types-collapsible'

export const Collapsible = ({
  open,
  animation = defaultAnimationValues,
  children,
}: CollapsibleProps) => {
  return (
    <StyledCollapsible $open={open} $animation={animation}>
      <CollapsibleInner>{children}</CollapsibleInner>
    </StyledCollapsible>
  )
}
