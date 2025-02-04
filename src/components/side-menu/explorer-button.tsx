import { useExplorerStore } from '@/store/use-explorer-store'

import { StyledMenuButton } from './styled-side-menu'
import type { MenuButtonProps } from './types-side-menu'

export const ExplorerButton = ({ icon: Icon, isOpen = false }: MenuButtonProps) => {
  const toggleExplorer = useExplorerStore(state => state.toggleExplorer)

  return (
    <StyledMenuButton $isOpen={isOpen} onClick={toggleExplorer}>
      <Icon strokeWidth={1.5} size={28} />
    </StyledMenuButton>
  )
}
