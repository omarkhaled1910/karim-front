import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity: 0,
    amount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addproduct: (state, action) => {
            console.log(action);
            state.products.push(action.payload.product);
            state.quantity = state.quantity += action.payload.quantity;
            state.amount = state.amount += (action.payload.quantity * action.payload.price)
        }
    }


})

export const { addproduct, } = cartSlice.actions

export default cartSlice.reducer