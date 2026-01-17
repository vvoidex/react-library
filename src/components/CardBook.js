import { useContext, useState } from "react";
import { BookContext } from "../context/shareContext";

function CardBook({ id, book }) {
  const { handleDelete, handleEdit } = useContext(BookContext);
  const [editBook, setEditBook] = useState(book);
  const [editing, setEditing] = useState(false);

  const onEdit = function () {
    setEditing(true);
  };

  const handleCancel = function () {
    setEditing(false);
  };

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

  if (editing) {
    return (
      <form onSubmit={handleSubmit}>
        <label>bookTitle</label>
        <input onChange={handleBookTitle} value={editBook.title}></input>
        <label>bookId</label>
        <input onChange={handleBookId} value={editBook.id}></input>
        <button>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    );
  }

  return (
    <li key={id}>
      <div>
        bookTitle: {book.title}, bookId: {book.id}
        <button
          onClick={() => {
            handleDelete(book);
          }}
        >
          Delete
        </button>
        <button onClick={onEdit}>Edit</button>
      </div>
    </li>
  );
}

export { CardBook };
