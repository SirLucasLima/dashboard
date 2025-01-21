import { create } from 'zustand'

interface ExplorerStore {
  isExplorerOpened: boolean
  toggleExplorer: () => void
  closeExplorer: () => void
  openExplorer: () => void
}

export const useExplorerStore = create<ExplorerStore>(set => ({
  isExplorerOpened: false,

  toggleExplorer: () => set(state => ({ isExplorerOpened: !state.isExplorerOpened })),

  closeExplorer: () => set(() => ({ isExplorerOpened: false })),

  openExplorer: () => set(() => ({ isExplorerOpened: true })),
}))
