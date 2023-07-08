import { createSlice } from '@reduxjs/toolkit'
import { productInerface } from '../../types/ProductInterface'
import getProductsCart from '../../utils/GetProductsCart'

const initialState = {
    product: getProductsCart()
}

const productSlice = createSlice({
    name:"produtos",
    initialState,
    reducers:{
        targetProduct: (state) =>{
            state.product = getProductsCart()
        }
    }
}) 

export const { targetProduct } = productSlice.actions 
export default productSlice.reducer