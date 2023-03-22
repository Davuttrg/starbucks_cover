import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
    email: string
}

// Define the initial state using that type
const initialState: UserState = {
    email: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authanticate: (state, action: PayloadAction<string>) => {
            state.email += action.payload
        },
    },
})

export const { authanticate } = userSlice.actions


export default userSlice.reducer