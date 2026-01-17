import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Provider } from "./context/shareContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
  </Provider>,
);
