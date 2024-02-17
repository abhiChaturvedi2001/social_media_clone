import React from "react";
import ReactDOM from "react-dom/client";
import App, { appRouter } from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { store } from "./utils/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
