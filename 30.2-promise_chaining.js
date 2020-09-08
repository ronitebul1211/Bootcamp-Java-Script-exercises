// Write two functions that use Promises that you can chain. 
//The first function, makeAllCaps(), 
// will take in an array of words and capitalize them, and then the second function, 
// sortWords(), will sort the words in  alphabetical order. 
// If the array contains anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

function makeAllCaps(wordsArray){
  return new Promise(function(resolve, reject) {   
    for (let i = 0; i < wordsArray.length; i++) {
      if (typeof wordsArray[i] !== 'string' ) {
        reject(`Array contain element isn't word`);
      } else {
        wordsArray[i] = wordsArray[i].toUpperCase();
      }
    }
    resolve(wordsArray);
  });
}
////////////////////////////
function sort(wordsArray){
  return new Promise(function(resolve){
    resolve(wordsArray.sort());
  })
}

///////////////////////////////////
makeAllCaps(['roni', 'lili', 'keren'])
.then((wordsArray) => {
  return sort(wordsArray)
})
.catch((error) => {console.log(error)})
.then((sortedWords) => {console.log(sortedWords);})


async function go(){
  const wordsArray = await makeAllCaps(['a', 'b', 'c']);
  console.log(wordsArray);
}

const result = go();
console.log("result",result);





