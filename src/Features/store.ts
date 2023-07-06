import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../Features/Filters/filtersSlice'
export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
})