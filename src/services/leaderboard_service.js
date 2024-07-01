/*
 * Services related to fetching leaderboard data
 * Cha Krupka, Spring 2024
 */

import axios from "axios";
const url = `${import.meta.env.VITE_BACKEND_URL}/api/top`;

export const getTopGamesToday = async () => {
  try {
    const res = await axios.get(`${url}/today`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getTopGamesYesterday = async () => {
  try {
    const res = await axios.get(`${url}/yesterday`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getAllTimeStats = async () => {
  try {
    const res = await axios.get(`${url}/all`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default {
  getTopGamesToday,
  getTopGamesYesterday,
  getAllTimeStats,
};
