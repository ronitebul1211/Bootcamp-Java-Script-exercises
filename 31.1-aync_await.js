//Lets change the code below to use async await instead of .then and .catch4
// We are faking an API request to a food recipe database.
// The Task
// Your task is to convert the consumed promise not to use .then and .catch but
// to use the modern way using async and await.
// Submit your file to Hive


// Here we are requesting for food recipe Ids, We get an array of Ids once consumed 
/* My Explanation: return promise -> wait 1.5 seconds then send array with id's */
const getIDs = () => 
 new Promise((resolve) => {
  setTimeout(() => {
    resolve([532, 543, 753, 1, 5]);
  }, 1500);
 });

 //Here we are fetching a recipe with a given Id.We are getting a recipe as an object once consumed.
/* My Explanation:
   # setTimeout(callbackFunction, milliseconds, additional arg sent to callback):
     getRecipe() -> get recipeID, passed to callback of set timeout.
     after 1.5 seconds promise resolve with string contain recipe ID & recipe title    
*/
 const getRecipe = (recipeID) => {
  return new Promise((resolve) => {
    setTimeout(
      (ID) => {
      const recipe = {
        title: "Fresh tomato pasta",
        publisher: "Pinchas Hodadad",
      };
      resolve(`${ID}: ${recipe.title}`);
      }, 1500, recipeID);
  });
 };

 //Here we are consuming the promise. Getting the Ids, then getting a recipe with the id in the index 2
 /**
  firstFun()
  */
//  getIDs() 
//   .then((IDs) => {
//   console.log(IDs);
//   return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//   console.log(recipe);
//   })
//   .catch((error) => {
//   console.log("It is an error!");
// })

async function test(){
  const ids = await getIDs();
  console.log(ids);
  const recipe = await getRecipe(ids[2]);
  console.log(recipe);
}

test().catch('It is an error!');

