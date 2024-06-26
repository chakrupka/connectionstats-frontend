/*
 * Router for main site
 * Cha Krupka, June 2024
 */

import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../screens/Error/error-page";
import SubmitGame from "../screens/SubmitGame/SubmitGame";
import Leaderboard from "../screens/Leaderboard/Leaderboard";
import Login from "../screens/Login/Login";
import CreateAccount from "../screens/CreateAccount/CreateAccount";
import Placeholder from "../screens/Placeholder/Placeholder";
import Settings from "../screens/Settings/Settings";
import Stats from "../screens/Stats/Stats";
import AppLoader from "../components/AppLoader";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLoader />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
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
    ],
  },
]);

export default router;
