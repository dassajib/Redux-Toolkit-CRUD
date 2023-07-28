import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../features/books/booksSlice";

const BooksView = () => {
  // useSelector hook for access redux data
  const books = useSelector((state) => (state.booksSlice.books));

  const dispatch = useDispatch()

  // delete function
  const onDelete = (id) => {
    dispatch(deleteBook(id))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Books Name</th>
            <th>Author Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, name, author } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{author}</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={() => onDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
