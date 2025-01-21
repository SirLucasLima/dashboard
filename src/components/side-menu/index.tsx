import { Files, type LucideIcon, User } from 'lucide-react'

import { StyledSideMenu, StyledSideMenuButton } from './styled-side-menu'

interface MenuButtonProps {
  icon: LucideIcon
  isActive?: boolean
}

const SideMenuButton = ({ icon: Icon, isActive = false }: MenuButtonProps) => {
  return (
    <StyledSideMenuButton $isActive={isActive}>
      <Icon strokeWidth={1.5} size={28} />
    </StyledSideMenuButton>
  )
}

export const SideMenu = () => {
  return (
    <StyledSideMenu>
      <div className="wrapper-buttons">
        <SideMenuButton icon={Files} isActive={true} />
      </div>
      <div>
        <SideMenuButton icon={User} />
      </div>
    </StyledSideMenu>
  )
}
