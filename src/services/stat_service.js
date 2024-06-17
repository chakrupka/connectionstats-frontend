/*
 * Services related to sending and recieving stats information
 * Cha Krupka, Spring 2024
 */

import axios from "axios";
const url = `${import.meta.env.VITE_BACKEND_URL}/api/stats`;

export const getUserStats = async (token) => {
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
