import { createSlice } from "@reduxjs/toolkit"
import { ProductData } from "../../typings"

interface favoriteState {
    favorite: ProductData[]
}

const initialState: favoriteState = {
    favorite: []
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if(!state.favorite.some(favoriteItem => favoriteItem.id === action.payload.id)) {
                state.favorite.push(action.payload)
            }
        },
        removeFavorite: (state, action) => {
            state.favorite = state.favorite.filter(obj => obj.id !== action.payload.id)
        }
    }
})

export const {addFavorite, removeFavorite} = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer