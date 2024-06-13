/*
 * App wrapper for loading user data
 * Cha Krupka, June 2024
 */

import { useSelector } from "react-redux";
import useLoadUser from "../hooks/useLoadUser.js";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppLoader = () => {
  useLoadUser();
  return <Outlet />;
};

export default AppLoader;
