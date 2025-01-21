import { useExplorerStore } from '@/store/use-explorer-store'

import { StyledMenuButton } from './styled-side-menu'
import type { MenuButtonProps } from './types-side-menu'

export const ExplorerButton = ({ icon: Icon, isActive = false }: MenuButtonProps) => {
  const toggleExplorer = useExplorerStore(state => state.toggleExplorer)

  return (
    <StyledMenuButton $isActive={isActive} onClick={toggleExplorer}>
      <Icon strokeWidth={1.5} size={28} />
    </StyledMenuButton>
  )
}
