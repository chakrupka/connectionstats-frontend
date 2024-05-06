import axios from "axios";
const url = import.meta.env.VITE_BACKEND_URL;

export const sendGame = async (game) => {
  try {
    const res = await axios.post(`${url}/api/games/game`, {
      content: {
        number: game.number,
        sequence: game.sequence,
        user: game.user,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getTodaysGames = async (date) => {
  try {
    const res = await axios.get(`${url}/api/games/today`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getAllGames = async (date) => {
  try {
    const res = await axios.get(`${url}/api/games/all`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
