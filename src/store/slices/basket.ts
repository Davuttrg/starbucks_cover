import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../services/product'

// Define a type for the slice state
interface BasketState {
    product: Product,
    amount: number,
}

// Define the initial state using that type
const initialState: BasketState[] = []

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        increaseAmount: (state, action: PayloadAction<string>) => {
            let basketItem = state.find((item) => item.product.id == action.payload) as BasketState;
            basketItem.amount += 1;
            return state
        },
        decreasePayload: (state, action: PayloadAction<string>) => {
            let basketItem = state.find((item) => item.product.id == action.payload) as BasketState;
            basketItem.amount -= 1;
            return state
        },
        addToBasket: (state, action: PayloadAction<BasketState>) => {
            state.push(action.payload)
            return state
        },
        disccardFromBasket: (state, action: PayloadAction<string>) => {
            const index = state.findIndex((item) => item.product.id == action.payload);
            state.splice(index, 1)
            return state
        },
    },
})

export const { increaseAmount } = basketSlice.actions


export default basketSlice.reducer