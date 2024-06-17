import { useDispatch } from "react-redux";
import { getUserGames } from "../services/game_service";
import { getUserStats } from "../services/stat_service";
import { addUserGames } from "../reducers/user_games_reducer";
import { updateAllStats } from "../reducers/stats_reducer";

export const loadUserGames = async (token, dispatch) => {
  const loadedGames = await getUserGames(token);
  dispatch(addUserGames(loadedGames));
  console.log(loadedGames);
};

export const loadUserStats = async (token, dispatch) => {
  const loadedStats = await getUserStats(token);
  dispatch(updateAllStats(loadedStats));
  console.log(loadedStats);
};
