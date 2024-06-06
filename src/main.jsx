import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { StrictMode } from "react";
import ErrorPage from "./screens/Error/error-page";
import SubmitGame from "./screens/SubmitGame/SubmitGame";
import Leaderboard from "./screens/Leaderboard/Leaderboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "submit",
    element: <SubmitGame />,
    errorElement: <ErrorPage />,
  },
  {
    path: "leaderboard",
    element: <Leaderboard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
