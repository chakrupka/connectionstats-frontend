import { DateTime } from "luxon";

const newDate = () => {
  const dt = DateTime.now().setZone("America/New_York");
  return dt.toFormat("yyyy-LL-dd");
};

export const printDate = (dateStr) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateValues = dateStr.split("-");
  const month = months[parseInt(dateValues[1]) - 1];
  const day = parseInt(dateValues[2]);

  return `${month} ${day}, ${dateValues[0]}`;
};

export default newDate;
