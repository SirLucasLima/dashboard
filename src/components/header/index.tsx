import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useExplorerStore } from '@/store/use-explorer-store'

import { StyledCloseButton, StyledHeader } from './styled-header'

export const Header = () => {
  const currentPageName = useExplorerStore(state => state.currentPageName)

  return (
    <StyledHeader>
      <div className="empty-space">&nbsp;</div>
      <span>
        <span>{currentPageName}</span>
        <span>{currentPageName ? ' - ' : ''}</span>
        <span>dev-lucas-lima - Dev Studio Code</span>
      </span>
      <StyledCloseButton as={Link} to={'/'} className="close">
        <X strokeWidth={2} size={14} />
      </StyledCloseButton>
    </StyledHeader>
  )
}
