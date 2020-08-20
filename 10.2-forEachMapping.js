`use-strict`

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1. Write a function called doubleValues which accepts an array and returns a
//new array with all the values in the array passed to the function doubled.
const doubleValues = (numsArray) => numsArray.map((num) => num * 2);
//TEST
//console.log(doubleValues(nums));


//2. Write a function called onlyEvenValues which accepts an array and returns
//  a new array with only the even values in the array passed to the function.
const onlyEvenValues = (numsArray) => numsArray.filter((num) => num%2 === 0);
//TEST
//console.log(onlyEvenValues(nums));


//3. Write a function called addKeyAndValue which accepts an array of objects, a key and a value as arguments. 
//   The function should return the array passed to the function with the new key and value added to each object.
const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
 ];

function addKeyAndValue(objectsArray, key, value){
  return objectsArray.map(element => {
    element[key] = value;
    return element;
  })
}
//TEST
//console.log(addKeyAndValue(data, "Bootcamp", "Appleseeds"));

//4. Write a function shiftLetters that takes a string and uses .map 
//   to return an encoded string with each letter shifted down the alphabet by one.
const shiftLettersDown = (string) => {
  let strArray = string.split('');
  let strShiftArray =  strArray.map(letter => String.fromCharCode(letter.charCodeAt()-1));
  return strShiftArray.join('');
}
//TEST
//console.log(shiftLettersDown(`ABCDefg`));

// Extra
// The goal of this function is to convert a string to a new string where each
// character in the new string is a “(“ if that character appears only once in the original string.
//  If that character appears more than once that new string will be a “)”.
//  Ignore capitalization when determining if a character is a duplicate.
//  Examples:
//  “din” => “(((“
//  “recede” => “()()()”
//  Success” => “)())())” [3, 1, 2, 2, ]
//  “(( @” => “))((“

function convertString(str) {
  // String Array
  const strArray = str.toLowerCase().split('');
  // letter existance array
  const letterExistanceArray = strArray.map((char) => {
    return  getCharExistanceCount(strArray, char);
  });

 console.log(letterExistanceArray);

    
}

function getCharExistanceCount(stringArray, char){
  return stringArray.filter((letter) => letter === char).length;
}

convertString('Success')


/////////////////////////////////////////////////////////////////////////////////

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}


