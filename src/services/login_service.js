/*
 * Services for user login
 * Cha Krupka, Spring 2024
 */

import axios from "axios";
const url = `${import.meta.env.VITE_BACKEND_URL}/api/login`;

export const login = async (credentials) => {
  const res = await axios.post(url, credentials);
  return res.data;
};

export default login;
