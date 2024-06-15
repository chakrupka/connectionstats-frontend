/*
 * App wrapper for loading user data
 * Cha Krupka, June 2024
 */

import useLoadUser from "../hooks/useLoadUser.js";
import { Outlet } from "react-router-dom";

const AppLoader = () => {
  useLoadUser();
  return <Outlet />;
};

export default AppLoader;
