import { Files, User } from 'lucide-react'

import { useExplorerStore } from '@/store/use-explorer-store'

import { ExplorerButton } from './explorer-button'
import { StyledSideMenu } from './styled-side-menu'

export const SideMenu = () => {
  const isExplorerOpened = useExplorerStore(state => state.isExplorerOpened)

  return (
    <StyledSideMenu>
      <div className="wrapper-buttons">
        <ExplorerButton icon={Files} isActive={isExplorerOpened} />
      </div>
      <div className="wrapper-buttons">
        <ExplorerButton icon={User} />
      </div>
    </StyledSideMenu>
  )
}
