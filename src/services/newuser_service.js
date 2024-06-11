/*
 * Services for creating user accoutns
 * Cha Krupka, Spring 2024
 */

import axios from "axios";
const url = `${import.meta.env.VITE_BACKEND_URL}/api/users`;

export const createUser = async (info) => {
  const res = await axios.post(url, info);
  return res.data;
};

export default createUser;
