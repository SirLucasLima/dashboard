import { create } from 'zustand'

interface ExplorerStore {
  isExplorerOpened: boolean
  currentPageName: string
  toggleExplorer: () => void
  closeExplorer: () => void
  openExplorer: () => void
  setCurrentPageName: (name: string) => void
}

const isLargeScreen = typeof window !== 'undefined' && window.innerWidth > 1200

export const useExplorerStore = create<ExplorerStore>(set => ({
  isExplorerOpened: isLargeScreen,
  currentPageName: '',

  toggleExplorer: () => set(state => ({ isExplorerOpened: !state.isExplorerOpened })),
  closeExplorer: () => set(() => ({ isExplorerOpened: false })),
  openExplorer: () => set(() => ({ isExplorerOpened: true })),

  setCurrentPageName: (name: string) => set(() => ({ currentPageName: name })),
}))
