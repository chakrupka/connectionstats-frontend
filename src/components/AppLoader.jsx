/*
 * App wrapper for loading user data
 * Cha Krupka, June 2024
 */

import { useSelector } from "react-redux";
import useLoadUser from "../hooks/useLoadUser";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppLoader = () => {
  useLoadUser();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return <Outlet />;
};

export default AppLoader;
