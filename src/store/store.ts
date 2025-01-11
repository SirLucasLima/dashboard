import { configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useSelector } from 'react-redux'

import { themeReducer } from './theme-slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

export type StoreState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector
