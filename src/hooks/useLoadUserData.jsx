/*
 * Hook for loading user data when app initializes
 * Cha Krupka, June 2024
 */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reducers/user_reducer";
import { useLocation, useNavigate } from "react-router-dom";
import { loadUserGames } from "../utils/redux_loaders.js";
import { loadUserStats } from "../utils/redux_loaders.js";

const useLoadUserData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      const loggedUserJSON = window.localStorage.getItem("loggedUser");
      if (loggedUserJSON) {
        const loggedUser = JSON.parse(loggedUserJSON);
        dispatch(loginUser(loggedUser));
        loadUserGames(loggedUser.token, dispatch);
        loadUserStats(loggedUser.token, dispatch);
      } else {
        if (
          location.pathname !== "/leaderboard" &&
          location.pathname !== "/home"
        ) {
          navigate("/home");
        }
      }
    }
  }, []);
};

export default useLoadUserData;
