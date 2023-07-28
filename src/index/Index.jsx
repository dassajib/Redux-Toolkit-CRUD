import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import BooksView from "../components/BooksView/BooksView";
import AddBook from "../components/AddBook/AddBook";
import EditBook from "../components/EditBook/EditBook";
import NavbarView from "../layout/NavbarView";

const Index = () => {
  return (
    <BrowserRouter>
      <NavbarView />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/show-books" element={<BooksView />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
