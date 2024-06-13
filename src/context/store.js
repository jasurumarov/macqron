import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from './cartSlice'
import { api } from "./api/api";

export const store = configureStore({
    reducer: {
        // cart: cartSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});