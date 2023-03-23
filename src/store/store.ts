import { configureStore } from '@reduxjs/toolkit'
import { basketSlice } from './slices/basket'
import { userSlice } from './slices/user'
// ...

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        basket:basketSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch