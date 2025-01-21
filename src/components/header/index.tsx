import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

import { StyledCloseButton, StyledHeader } from './styled-header'

export const Header = () => {
  // const { title, tabs, contact } = getHeaderConfig()
  return (
    <StyledHeader>
      <div className="empty-space">&nbsp;</div>
      <span>dev-lucas-lima - Dev Studio Code</span>
      <StyledCloseButton as={Link} to={'/'} className="close">
        <X strokeWidth={1.5} size={14} />
      </StyledCloseButton>
    </StyledHeader>
  )
}
