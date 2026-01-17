import { useState, useContext } from "react";
import { BookContext } from "../context/shareContext";

function CreateBook() {
  const { createBook } = useContext(BookContext);
  const [bookDetails, setBookDetails] = useState({ title: "", id: "" });

  function handleSubmit(e) {
    e.preventDefault();
    createBook(bookDetails);
    setBookDetails({ title: "", id: "" });
  }

  function handleBookTitle(e) {
    setBookDetails({ ...bookDetails, title: e.target.value });
  }

  function handleBookId(e) {
    setBookDetails({ ...bookDetails, id: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>bookTitle</label>
      <input onChange={handleBookTitle} value={bookDetails.title} />
      <label>bookId</label>
      <input onChange={handleBookId} value={bookDetails.id} />
      <button>Submit</button>
    </form>
  );
}

export { CreateBook };
