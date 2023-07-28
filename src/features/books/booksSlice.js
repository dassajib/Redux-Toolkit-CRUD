import { createSlice } from "@reduxjs/toolkit";

// creating initial state
const initiaState = {
  books: [
    { id: 1, name: "Atomic Habits", author: "James Clear" },
    { id: 2, name: "Steal like an artist", author: "Austin Kleon" },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initiaState,
  reducers: {
    // this function will return state
    showBook: (state) => state,
    // this function for create.from form we store here data and take data by payload
    addBook: (state, action) => {
        // Got new data from payload
        state.books.push(action.payload)
    },
    // del function
    deleteBook: (state, action) => {
        const id = action.payload;
        // remove id that is matched with user's clicking delete button id
        state.books = state.books.filter(book => book.id != id)
    }
  },
});

export const { showBook, addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
