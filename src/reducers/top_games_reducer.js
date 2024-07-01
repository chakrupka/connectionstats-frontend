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
    case "ADD_TOP_YESTERDAY":
      return {
        ...state,
        topYesterday: action.payload,
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

export const addTopYesterdayGames = (games) => {
  return {
    type: "ADD_TOP_YESTERDAY",
    payload: games,
  };
};

export default topGamesReducer;
