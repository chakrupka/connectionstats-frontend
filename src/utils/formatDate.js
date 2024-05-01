export const newDate = () => {
  var currentDate = new Date();
  var day = currentDate.getDate().toString();
  var month = (currentDate.getMonth() + 1).toString();
  var year = currentDate.getFullYear().toString();

  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${year}-${month}-${day}`;
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
