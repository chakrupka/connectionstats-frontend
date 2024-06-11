/*
 * Services related to sending and recieving game information
 * Cha Krupka, Spring 2024
 */

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

export const getTodaysGames = async () => {
  try {
    const res = await axios.get(`${url}/today`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getAllGames = async () => {
  try {
    // const config = {
    //   headers: { Authorization: token },
    // };
    // const res = await axios.get(url, config);
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getUserGames = async () => {
  try {
    const config = {
      headers: { Authorization: token },
    };

    const res = await axios.get(`${url}/user`, config);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default {
  setToken,
  sendGame,
  getTodaysGames,
  getAllGames,
  getUserGames,
};
