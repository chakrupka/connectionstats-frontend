/*
 * Reducer for user info
 * Cha Krupka, June 2024
 */

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export const loginUser = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
    payload: null,
  };
};

export default userReducer;
