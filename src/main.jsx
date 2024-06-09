import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { StrictMode } from "react";
import ErrorPage from "./screens/Error/error-page";
import SubmitGame from "./screens/SubmitGame/SubmitGame";
import Leaderboard from "./screens/Leaderboard/Leaderboard";
import Login from "./screens/Login/Login";
import CreateAccount from "./screens/CreateAccount/CreateAccount";
import Placeholder from "./screens/Placeholder/Placeholder";
import Settings from "./screens/Settings/Settings";
import Stats from "./screens/Stats/Stats";

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
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "setup",
    element: <CreateAccount />,
    errorElement: <ErrorPage />,
  },
  {
    path: "stats",
    element: <Stats />,
    errorElement: <ErrorPage />,
  },
  {
    path: "settings",
    element: <Settings />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
