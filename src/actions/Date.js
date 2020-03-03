export default () => {
  const objToday = new Date();
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
    "December"
  ];

  const curHour =
    objToday.getHours() < 10 
    ? "0" + objToday.getHours() 
    : objToday.getHours();

  const dayOfMonth = objToday.getDate();
  
  const curMinute =
    objToday.getMinutes() < 10
      ? "0" + objToday.getMinutes()
      : objToday.getMinutes();

  const curMonth = months[objToday.getMonth()];
  const curYear = objToday.getFullYear();

  return `${curHour}:${curMinute}; ${dayOfMonth} ${curMonth} ${curYear}`;
};
