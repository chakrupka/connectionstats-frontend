/*
 * Various date utilities specific to ConStats
 * Cha Krupka, Spring 2024
 * Update June 2024
 */

import { DateTime } from "luxon";

const newDateEST = () => {
  const dt = DateTime.now().setZone("America/New_York");
  return dt.toFormat("yyyy-LL-dd");
};

// Input is a string of format "YYYY-MM-DD" (ex: "2024-11-19")
const prettyStrDate = (dateStr) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateValues = dateStr.split("-");
  const month = months[parseInt(dateValues[1]) - 1];
  const day = parseInt(dateValues[2]);

  return `${month} ${day}, ${dateValues[0]}`;
};

// Input is a string of format "YYYY-MM-DD" (ex: "2024-11-19")
const dateToUnix = (dateString) => {
  const dt = DateTime.fromISO(dateString).setZone("America/New_York");
  return dt.toSeconds();
};

// Input is a number of seconds
const unixToDate = (seconds) => {
  const dt = DateTime.fromSeconds(seconds).setZone("America/New_York");
  return dt.toFormat("yyyy-LL-dd");
};

// Input is an array of date strings in format "YYYY-MM-DD" (ex: "2024-11-19")
const sortDates = (games) => {
  const todaysDate = dateUtils.newDate();
  const dates = games.map((game) => dateUtils.dateToUnix(game.date));
  dates.sort();
  const sortedDates = dates.map((date) => dateUtils.unixToDate(date));
  return sortedDates;
};

// Input is two date strings in format "YYYY-MM-DD" (ex: "2024-11-19")
const areDayApart = (date1, date2) => {
  return (
    dateUtils.dateToUnix(date1) + 86400 === dateUtils.dateToUnix(date2) ||
    dateUtils.dateToUnix(date1) === dateUtils.dateToUnix(date2) + 86400
  );
};

const getTodayPuzzleNum = () => {
  const firstDate = DateTime.fromISO("2023-06-11T00:00:00", {
    zone: "America/New_York",
  });
  const todayDate = DateTime.now().setZone("America/New_York");
  return Math.floor(-firstDate.diff(todayDate, "day").toObject().days);
};

// Input is a string of format "YYYY-MM-DD" (ex: "2024-11-19")
const dateToPuzzleNum = (dateStr) => {
  const firstDate = DateTime.fromISO("2023-06-11T00:00:00", {
    zone: "America/New_York",
  });
  const puzzleDate = DateTime.fromISO(dateStr).setZone("America/New_York");
  return Math.floor(-firstDate.diff(puzzleDate, "day").toObject().days);
};

const puzzleNumToDate = (number) => {
  const firstDate = DateTime.fromISO("2023-06-11T00:00:00", {
    zone: "America/New_York",
  });
  return firstDate.plus({ days: number }).toFormat("yyyy-LL-dd");
};

export default {
  newDateEST,
  prettyStrDate,
  dateToUnix,
  unixToDate,
  sortDates,
  areDayApart,
  getTodayPuzzleNum,
  dateToPuzzleNum,
  puzzleNumToDate,
};
