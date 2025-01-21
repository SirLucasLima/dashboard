import { useExplorerStore } from '@/store/use-explorer-store'

import { StyledExplorerButton } from './styled-side-menu'
import type { MenuButtonProps } from './types-side-menu'

export const ExplorerButton = ({ icon: Icon, isActive = false }: MenuButtonProps) => {
  const toggleExplorer = useExplorerStore(state => state.toggleExplorer)

  return (
    <StyledExplorerButton $isActive={isActive} onClick={toggleExplorer}>
      <Icon strokeWidth={1.5} size={28} />
    </StyledExplorerButton>
  )
}
