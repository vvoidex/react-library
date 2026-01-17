import { useContext, useEffect } from "react";
import { CreateBook } from "./CreateBook";
import { ListBook } from "./ListBook";
import { CardBook } from "./CardBook";
import { Root } from "./Root";
import { HomePage } from "./HomePage";
import { BookContext } from "../context/shareContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/books",
          element: <ListBook />,
        },
        { path: "/books/:id", element: <CardBook /> },
      ],
    },
  ]);

  const { stableGetBooks } = useContext(BookContext);

  useEffect(() => {
    stableGetBooks();
  }, [stableGetBooks]);

  return (
    <>
      <div>App</div>
      <RouterProvider router={router} />
      <CreateBook />
      <ListBook />
    </>
  );
}

export { App };
