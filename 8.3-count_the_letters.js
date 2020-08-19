/**
 Create a function that takes one argument, an array. Use this array:

 const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

 to count over all the letters and return an object with the letter as the key and the letter count as the value.

 Expected output:
{ h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c: 1, m: 2, t: 1, b: 1, s: 1 }

 */

`use-strict`

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

console.log(getLettersCount(array));

function getLettersCount(stringArray){
  // create letters array
  let letterArray =  stringArray.join('').split(' ').join('').toLowerCase().split('');

  let lettersCounter = {};

  for (let i = 0; i < letterArray.length; i++){
    // lettersCounter.hasOwnProperty(letterArray[i])
    // ? lettersCounter[letterArray[i]]++
    // :lettersCounter[letterArray[i]] = 1;

    // lettersCounter[letterArray[i]] = Nan(falsy) / number(truthy)
    console.log(lettersCounter[letterArray[i]] + 1);
    lettersCounter[letterArray[i]] = lettersCounter[letterArray[i]] + 1 || 1;
  }
  return lettersCounter
}











