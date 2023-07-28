import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../features/books/booksSlice";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";

const BooksView = () => {
  // useSelector hook for access redux data
  const books = useSelector((state) => state.booksSlice.books);

  const dispatch = useDispatch();

  // delete function
  const onDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <Container>
      <Table className="mt-5" striped bordered hover>
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
                    <Link to="/edit-book" state={{ id, name, author }}>
                      <Button variant="info" className="m-1">
                        Edit
                      </Button>
                    </Link>
                    <Button
                      onClick={() => onDelete(id)}
                      className="m-1"
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default BooksView;
