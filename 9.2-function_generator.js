`use-strict`

// 1. Create a function that returns a random number between 1-20. 


//2. Create another function that takes two arguments, a number and a callback function.
//   This functions calls the callback function until it returns a number equal to the number it got from the user.
//   After it found the number, the function prints to the screen how many attempts it took to receive it.

let callCounter = 0;

const getRandomNum = () => Math.floor(Math.random() * 20) + 1;

anotherFunction(15, getRandomNum);

function anotherFunction(number, callback){
  if(typeof callback === 'function'){
    callCounter++;

    callback() === number
    ? console.log(`Success in Attempt: ${callCounter}`)
    : anotherFunction(number, callback);
  }
}




