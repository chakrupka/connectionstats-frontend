/*
 * Reducer for user statistics
 * Cha Krupka, June 2024
 */

const topStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_ALL_TOP_STATS":
      return {
        ...state,
        byNumSubmitted: action.payload.byNumSubmitted,
        byNumSolved: action.payload.byNumSolved,
        byNumPerfect: action.payload.byNumPerfect,
        bySolveRate: action.payload.bySolveRate,
        byAvgScore: action.payload.byAvgScore,
        byLongStreak: action.payload.byLongStreak,
      };
    default:
      return state;
  }
};

export const updateTopStats = (topStats) => {
  return {
    type: "UPDATE_ALL_TOP_STATS",
    payload: topStats,
  };
};

export default topStatsReducer;
