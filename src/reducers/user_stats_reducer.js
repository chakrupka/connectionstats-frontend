/*
 * Reducer for user statistics
 * Cha Krupka, June 2024
 */

const userStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_ALL_USER_STATS":
      return {
        ...state,
        currentStreak: action.payload.currentStreak,
        prevStreak: action.payload.prevStreak,
        longestStreak: action.payload.longestStreak,
        totalGames: action.payload.totalGames,
        solvedGames: action.payload.solvedGames,
        perfectGames: action.payload.perfectGames,
        solvePercent: action.payload.solvePercent,
        avgScore: action.payload.avgScore,
      };
    default:
      return state;
  }
};

export const updateUserStats = (stats) => {
  return {
    type: "UPDATE_ALL_USER_STATS",
    payload: stats,
  };
};

export default userStatsReducer;
