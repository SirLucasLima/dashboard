import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDark: true,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDark = !state.isDark
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export const { reducer: themeReducer } = themeSlice
