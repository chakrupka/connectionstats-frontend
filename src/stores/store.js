import { configureStore } from "@reduxjs/toolkit";
import userGamesReducer from "../reducers/user_games_reducer";
import topGamesReducer from "../reducers/top_games_reducer";
import userReducer from "../reducers/user_reducer";
import statsReducer from "../reducers/stats_reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    userGames: userGamesReducer,
    topGames: topGamesReducer,
    stats: statsReducer,
  },
});

export default store;
