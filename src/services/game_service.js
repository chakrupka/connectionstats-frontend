import axios from "axios";
const url = `${import.meta.env.VITE_BACKEND_URL}/api/games`;

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const sendGame = async (game) => {
  try {
    const config = {
      headers: { Authorization: token },
    };

    const res = await axios.post(`${url}/game`, game, config);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getTodaysGames = async (date) => {
  try {
    const res = await axios.get(`${url}/today`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getAllGames = async (date) => {
  try {
    const res = await axios.get(`${url}/all`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default { setToken, sendGame, getTodaysGames, getAllGames };
