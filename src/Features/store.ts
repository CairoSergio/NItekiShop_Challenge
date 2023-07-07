import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../Features/Filters/filtersSlice'
import ProductsSlice from './Products/ProductsSlice'
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    product: ProductsSlice
  },
})