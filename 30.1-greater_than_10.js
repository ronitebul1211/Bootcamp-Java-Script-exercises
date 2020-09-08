'use-strict'
// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

function test(number){
  return new Promise(function(resolve, reject){
    if(number > 10){
      resolve(`resolve: ${number} grater than 10`);
    } else {
      reject(`reject: ${number} less than 10`);
    }
  });
}

test(12)
.then(message => console.log(message))
.catch(error => console.log(error));