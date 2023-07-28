import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "../../features/books/booksSlice";

const EditBook = () => {
  const location = useLocation();

  const [id, setId] = useState(location.state.id);
  const [name, setName] = useState(location.state.name);
  const [author, setAuthor] = useState(location.state.author);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id, name, author }));
    navigate("/show-books");
  };

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
        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditBook;
