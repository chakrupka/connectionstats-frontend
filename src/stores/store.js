import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../reducers/games_reducer";
import userReducer from "../reducers/user_reducer";
import statsReducer from "../reducers/stats_reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
    stats: statsReducer,
  },
});

export default store;
