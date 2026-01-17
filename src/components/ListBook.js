import React, { useContext } from "react";
import { CardBook } from "./CardBook";
import { BookContext } from "../context/shareContext";

function ListBook() {
  const { books } = useContext(BookContext);
  const bookList = books.map((book) => {
    return <CardBook id={book.id} book={book} />;
  });
  return <ul>{bookList}</ul>;
}

export { ListBook };
