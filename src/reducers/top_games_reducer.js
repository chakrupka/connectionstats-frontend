/*
 * Reducer for user games
 * Cha Krupka, June 2024
 */

const topGamesReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TOP_TODAY":
      return {
        ...state,
        topToday: action.payload,
      };
    case "ADD_TOP_ALL_TIME":
      return {
        ...state,
        topAllTime: action.payload,
      };
    default:
      return state;
  }
};

export const addTopTodayGames = (games) => {
  return {
    type: "ADD_TOP_TODAY",
    payload: games,
  };
};

export const addTopAllTimeGames = (games) => {
  return {
    type: "ADD_TOP_ALL_TIME",
    payload: games,
  };
};

export default topGamesReducer;
