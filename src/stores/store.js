import { configureStore } from "@reduxjs/toolkit";
import userGamesReducer from "../reducers/user_games_reducer";
import topGamesReducer from "../reducers/top_games_reducer";
import userReducer from "../reducers/user_reducer";
import userStatsReducer from "../reducers/user_stats_reducer";
import topStatsReducer from "../reducers/top_stats_reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    userGames: userGamesReducer,
    userStats: userStatsReducer,
    topGames: topGamesReducer,
    topStats: topStatsReducer,
  },
});

export default store;
