/*
 * Hook for loading user data when app initializes
 * Cha Krupka, June 2024
 */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reducers/user_reducer";
import { getUserGames } from "../services/game_service";
import { addGames } from "../reducers/games_reducer";
import { updateAllStats } from "../reducers/stats_reducer";
import { getUserStats } from "../services/stat_service";
import { useLocation, useNavigate } from "react-router-dom";

const useLoadUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  const loadGames = async (token) => {
    const loadedGames = await getUserGames(token);
    dispatch(addGames(loadedGames));
    console.log(loadedGames);
  };

  const loadStats = async (token) => {
    const loadedStats = await getUserStats(token);
    dispatch(updateAllStats(loadedStats));
    console.log(loadedStats);
  };

  useEffect(() => {
    if (!user) {
      const loggedUserJSON = window.localStorage.getItem("loggedUser");
      if (loggedUserJSON) {
        const loggedUser = JSON.parse(loggedUserJSON);
        dispatch(loginUser(loggedUser));
        loadGames(loggedUser.token);
        loadStats(loggedUser.token);
      } else {
        if (location.pathname !== "/leaderboard") {
          navigate("/home");
        }
      }
    }
  }, [user, dispatch, location, navigate]);
};

export default useLoadUser;
