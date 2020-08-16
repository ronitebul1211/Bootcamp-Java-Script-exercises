/**
Create a program that will output the current day and time in the following
format to the terminal:
Today is : Sunday
Current time is : 15:26:45
*/
'use-strict'
console.log('hello');
console.log(getCurrentDate());
console.log("bye");


/******************************** */
function getCurrentDate() {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let currentDate = new Date();
  return `Today is ${days[currentDate.getDay()]}
  Current time is : ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}

