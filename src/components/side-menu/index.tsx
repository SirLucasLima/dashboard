import { Files, User } from 'lucide-react'

import { ExplorerButton } from './explorer-button'
import { StyledSideMenu } from './styled-side-menu'

export const SideMenu = () => {
  return (
    <StyledSideMenu>
      <div className="wrapper-buttons">
        <ExplorerButton icon={Files} isActive={true} />
      </div>
      <div className="wrapper-buttons">
        <ExplorerButton icon={User} />
      </div>
    </StyledSideMenu>
  )
}
