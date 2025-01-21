import { create } from 'zustand'

interface ExplorerStore {
  isExplorerOpened: boolean
  toggleExplorer: () => void
  closeExplorer: () => void
  openExplorer: () => void
}

const isLargeScreen = typeof window !== 'undefined' && window.innerWidth > 1200

export const useExplorerStore = create<ExplorerStore>(set => ({
  isExplorerOpened: isLargeScreen,

  toggleExplorer: () => set(state => ({ isExplorerOpened: !state.isExplorerOpened })),

  closeExplorer: () => set(() => ({ isExplorerOpened: false })),

  openExplorer: () => set(() => ({ isExplorerOpened: true })),
}))
