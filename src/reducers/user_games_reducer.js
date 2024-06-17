/*
 * Reducer for user games
 * Cha Krupka, June 2024
 */

const userGamesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_GAMES":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const addUserGames = (games) => {
  // check if one game (just an object) or multiple (already an array)
  const payload = Array.isArray(games) ? games : [games];

  return {
    type: "ADD_GAMES",
    payload,
  };
};

export default userGamesReducer;
