export interface ExplorerProps {
  open: boolean
  animation?: Animation
  children: React.ReactNode
}

export interface ExplorerStyledProps {
  $isFile?: boolean
  $isCurrent?: boolean
}
