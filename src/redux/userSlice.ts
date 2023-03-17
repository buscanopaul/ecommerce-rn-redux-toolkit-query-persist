import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOnboard: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setOnBoard: (state, action) => {
            state.isOnboard = action.payload
        }
    }
})

export const { setOnBoard } = userSlice.actions
export const userReducer = userSlice.reducer
