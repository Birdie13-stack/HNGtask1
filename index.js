const date = new Date();

const dayOfWeek = date.getDay();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = daysOfWeek[dayOfWeek];

const dateDisplay = document.getElementById("date");

dateDisplay.innerHTML = dayName;

const currentUTC = new Date().getTime();

const time = document.getElementById("time");

time.innerHTML = currentUTC;
