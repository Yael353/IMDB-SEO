import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
 {
  element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

    ],
    errorElement: <NotFound />,
 }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <StrictMode>
        <App />
      </StrictMode>
    </RouterProvider>
  </Provider>
);
