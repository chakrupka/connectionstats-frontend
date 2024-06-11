/*
 * Hook for loading user data when app initializes
 * Cha Krupka, June 2024
 */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reducers/user_reducer";

const useLoadUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      const loggedUserJSON = window.localStorage.getItem("loggedUser");
      if (loggedUserJSON) {
        dispatch(loginUser(JSON.parse(loggedUserJSON)));
      }
    }
  }, [user, dispatch]);
};

export default useLoadUser;
