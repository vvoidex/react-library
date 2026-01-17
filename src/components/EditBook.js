import { useState, useContext } from "react";
import { BookContext } from "../context/shareContext";

function EditBook({ book }) {
  const { handleEdit, setEditing } = useContext(BookContext);
  const [editBook, setEditBook] = useState(book);

  function handleBookTitle(e) {
    setEditBook({ ...editBook, title: e.target.value });
  }

  function handleBookId(e) {
    setEditBook({ ...editBook, id: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(editBook);
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>bookTitle</label>
      <input onChange={handleBookTitle} value={editBook.title}></input>
      <label>bookId</label>
      <input onChange={handleBookId} value={editBook.id}></input>
      <button>Submit</button>
    </form>
  );
}

export { EditBook };
