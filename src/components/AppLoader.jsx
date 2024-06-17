/*
 * App wrapper for loading user data
 * Cha Krupka, June 2024
 */

import useLoadUserData from "../hooks/useLoadUserData.jsx";
import { Outlet } from "react-router-dom";

const AppLoader = () => {
  useLoadUserData();
  return <Outlet />;
};

export default AppLoader;
