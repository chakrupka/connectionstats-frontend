/*
 * Services related to sending and recieving game information
 * Cha Krupka, Spring 2024
 */

import axios from "axios";
const url = `${import.meta.env.VITE_BACKEND_URL}/api/games`;

export const sendGame = async (game, token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const res = await axios.post(`${url}/game`, game, config);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getUserGames = async (token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const res = await axios.get(`${url}/user`, config);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default {
  sendGame,
  getUserGames,
};
