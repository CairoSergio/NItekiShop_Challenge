import { createSlice } from '@reduxjs/toolkit'
import { productInerface } from '../../types/ProductInterface'

const initialState = {
    product: {}
}

const productSlice = createSlice({
    name:"produtos",
    initialState,
    reducers:{
        targetProduct: (state, action ) =>{
            state.product = action
        }
    }
}) 

export const { targetProduct } = productSlice.actions 
export default productSlice.reducer