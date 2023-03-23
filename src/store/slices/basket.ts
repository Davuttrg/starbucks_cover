import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../services/product'

// Define a type for the slice state
export interface BasketState {
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
        decreaseAmount: (state, action: PayloadAction<string>) => {
            let basketItem = state.find((item) => item.product.id == action.payload) as BasketState;
            basketItem.amount -= 1;
            return state
        },
        addToBasket: (state, action: PayloadAction<Product>) => {
            state.push({ product: action.payload, amount: 1 })
            return state
        },
        discardFromBasket: (state, action: PayloadAction<string>) => {
            const index = state.findIndex((item) => item.product.id == action.payload);
            state.splice(index, 1)
            return state
        },
    },
})

export const { increaseAmount, decreaseAmount, addToBasket, discardFromBasket } = basketSlice.actions


export default basketSlice.reducer