import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../typings";

interface CartState {
    cart: ProductData[]
}

const initialState: CartState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            if(!state.cart.some(cartItem => cartItem.id === action.payload.id)) {
                state.cart.push(action.payload)
            }       
        },
        deleteItem: (state, action) => {
            state.cart = state.cart.filter(obj => obj.id !== action.payload.id)
        },
        incrementQuantity: (state, action) => {
            const {productId} = action.payload
            const product = state.cart.find(p => p.id === productId)
            if(product) {
                product.quantity += 1
            }
        },
        decrementQuantity: (state, action) => {
            const {productId} = action.payload
            const product = state.cart.find(p => p.id === productId) 
            if(product) {
                product.quantity -= 1
            }
        }
    }
})

export const { addItem, deleteItem, incrementQuantity, decrementQuantity } = cartSlice.actions

export const cartReducer = cartSlice.reducer