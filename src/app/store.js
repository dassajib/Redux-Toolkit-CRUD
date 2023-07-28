import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../features/books/booksSlice";

// redux storehouse
const store = configureStore({
    reducer: {
        booksSlice: booksSlice,
    }
})

export default store;