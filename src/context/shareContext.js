import { useState, createContext, useCallback } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    try {
      const response = await axios.get("http://localhost:3005/books");
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function createBook(newBook) {
    try {
      const response = await axios.post("http://localhost:3005/books", newBook);
      setBooks((books) => [...books, response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(toBeDeletedBook) {
    try {
      await axios.delete(`http://localhost:3005/books/${toBeDeletedBook.id}`);
      const newBooks = books.filter((book) => {
        return book.id !== toBeDeletedBook.id;
      });
      setBooks(newBooks);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleEdit(toBeEditedBook) {
    try {
      const response = await axios.put(
        `http://localhost:3005/books/${toBeEditedBook.id}`,
        toBeEditedBook,
      );
      const updatedBooks = (books) =>
        books.map((book) => {
          if (book.id === toBeEditedBook.id) {
            return { ...book, ...response.data };
          }
          return book;
        });
      setBooks(updatedBooks);
    } catch (error) {
      console.error(error);
    }
  }

  const [editing, setEditing] = useState(false);
  const stableGetBooks = useCallback(getBooks, []);

  const inputValue = {
    stableGetBooks,
    getBooks,
    createBook,
    books,
    handleDelete,
    handleEdit,
    editing,
    setEditing,
  };

  return (
    <BookContext.Provider value={inputValue}>{children}</BookContext.Provider>
  );
}
export { Provider, BookContext };
