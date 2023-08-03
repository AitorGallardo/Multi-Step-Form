import { configureStore } from '@reduxjs/toolkit'
import { formSlice } from './form'

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
})