export interface ExplorerProps {
  open: boolean
  animation?: Animation
  children: React.ReactNode
}

export interface StyledExplorerFolderProps {
  $isFile?: boolean
  $isCurrent?: boolean
}

export interface StyledExplorerProps {
  $isOpen: boolean
}
