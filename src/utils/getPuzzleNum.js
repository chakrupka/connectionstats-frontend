// Calculate the current puzzle number
// First puzzle was on June 11, 2023
// Cha Krupka, Spring 2024

import { DateTime } from "luxon";

const getPuzzleNum = () => {
  const firstDate = DateTime.fromISO("2023-06-11").setZone("America/New_York");
  const todayDate = DateTime.now().setZone("America/New_York");
  return Math.floor(-firstDate.diff(todayDate, "day").toObject().days);
};

export default getPuzzleNum;
