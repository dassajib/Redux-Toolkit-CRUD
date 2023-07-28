import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../features/books/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  // useSelector hook is using for getting state's data
  const booksLength = useSelector((state) => state.booksSlice.books.length)

  // useDispatch is used for send an action
  const dispatch = useDispatch()

  // to navigate use useNavigate
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // new data
    const book = {id: booksLength + 1,name, author}
    // sending action 
    dispatch(addBook(book))
    // to redirect to show-books
    navigate('/show-books')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Book Name : </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Author Name : </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button>Save Info</button>
      </form>
    </div>
  );
};

export default AddBook;
