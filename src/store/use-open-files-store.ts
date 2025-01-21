import { create } from 'zustand'

interface OpenFilesState {
  openFiles: string[]
  markFileAsOpen: (file: string) => void
  closeFile: (fileIndex: number) => void
}

export const useOpenFilesStore = create<OpenFilesState>((set, get) => ({
  openFiles: [],

  markFileAsOpen: (file: string) => {
    const { openFiles } = get()
    if (openFiles.includes(file)) return
    set({ openFiles: [...openFiles, file] })
  },

  closeFile: (fileIndex: number) => {
    const { openFiles } = get()
    set({ openFiles: openFiles.filter((_, index) => index !== fileIndex) })
  },
}))
