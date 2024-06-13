/*
 * Reducer for user statistics
 * Cha Krupka, June 2024
 */

const statsReducer = (state = {}, action) => {
  switch (action.type) {
    case "CURRENT_STREAK":
      return {
        ...state,
        currentStreak: action.payload,
      };
    case "LONGEST_STREAK":
      return {
        ...state,
        longestStreak: action.payload,
      };
    case "GAMES_TOTAL":
      return {
        ...state,
        gamesTotal: action.payload,
      };
    case "GAMES_SOLVED":
      return {
        ...state,
        gamesSolved: action.payload,
      };
    case "SOLVED_PERCENT":
      return {
        ...state,
        solvePercent: action.payload,
      };
    case "UPDATE_ALL":
      return action.payload;
    default:
      return state;
  }
};

export const updateAllStats = (stats) => {
  return {
    type: "UPDATE_ALL",
    payload: stats,
  };
};

export const updateCurrStreak = (streak) => {
  return {
    type: "CURRENT_STREAK",
    payload: streak,
  };
};

export const updateLongStreak = (streak) => {
  return {
    type: "LONGEST_STREAK",
    payload: streak,
  };
};

export const updateNumGames = (numGames) => {
  return {
    type: "GAMES_TOTAL",
    payload: numGames,
  };
};

export const updateNumSolved = (numSolved) => {
  return {
    type: "GAMES_SOLVED",
    payload: numSolved,
  };
};

export const updateSolvePercent = (solvePercent) => {
  return {
    type: "SOLVED_PERCENT",
    payload: solvePercent,
  };
};

export default statsReducer;
