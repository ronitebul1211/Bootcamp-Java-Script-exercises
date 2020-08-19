`use-strict`

/**
 Write a function that receives 2 arguments, a string and a callback function.
 1. The function checks that the callback function is indeed a function.
 2. Pass the string to the callback function which logs that string to the
    console.
 */

 // WORK
 myFunction("RONI", printToConsole);
// NOT WORK
 myFunction("RONI", "RONI");

 function myFunction(string, callback ){
  if(typeof callback === 'function'){
    callback(string);
  }
 }

 const printToConsole = (string) => {
  console.log(string);
 }