import { useDispatch } from "react-redux";
import { getUserGames } from "../services/game_service";
import { getUserStats } from "../services/stat_service";
import { addUserGames } from "../reducers/user_games_reducer";
import { updateUserStats } from "../reducers/user_stats_reducer";
import {
  addTopTodayGames,
  addTopYesterdayGames,
} from "../reducers/top_games_reducer";
import {
  getAllTimeStats,
  getTopGamesToday,
  getTopGamesYesterday,
} from "../services/leaderboard_service";
import { updateTopStats } from "../reducers/top_stats_reducer";

export const loadUserGames = async (token, dispatch) => {
  const loadedGames = await getUserGames(token);
  if (loadedGames) {
    dispatch(addUserGames(loadedGames));
  } else {
    console.log("Failed to load user games");
  }
};

export const loadUserStats = async (token, dispatch) => {
  const loadedStats = await getUserStats(token);
  if (loadedStats) {
    dispatch(updateUserStats(loadedStats));
  } else {
    console.log("Failed to load user stats");
  }
};

export const loadTodayGames = async (dispatch) => {
  const loadedTodayGames = await getTopGamesToday();
  if (loadedTodayGames) {
    dispatch(addTopTodayGames(loadedTodayGames));
  } else {
    console.log("Failed to load today's top games");
  }
};

export const loadYesterdayGames = async (dispatch) => {
  const loadedYesterdayGames = await getTopGamesYesterday();
  if (loadedYesterdayGames) {
    dispatch(addTopYesterdayGames(loadedYesterdayGames));
  } else {
    console.log("Failed to loady yesterday's top games");
  }
};

export const loadTopStats = async (dispatch) => {
  const loadedTopStats = await getAllTimeStats();
  if (loadedTopStats) {
    dispatch(updateTopStats(loadedTopStats));
  } else {
    console.log("Failed to load all time stats)");
  }
};

export const loadAllData = async (token, dispatch) => {
  await Promise.all([
    loadUserGames(token, dispatch),
    loadUserStats(token, dispatch),
    loadTodayGames(dispatch),
    loadYesterdayGames(dispatch),
    loadTopStats(dispatch),
  ]);
};
