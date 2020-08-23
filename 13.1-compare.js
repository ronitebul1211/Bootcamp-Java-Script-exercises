`use-strict`
/**
 You are given two arrays:
 Create a function that takes these two arrays as arguments.
 Compare these two arrays and return the items that are the same. If none are the same return false.
 */

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const food2 = ["Noodle", "Pasta", "Meat", "Cucumber", "Olives"];
const food3 = ["Fries", "Ice-cream", "Pizza", "Hamburgers"];

const compareArrays =  (array1, array2) => {
  
  const sameItems = [];

  for(item1 of array1){
    for(item2 of array2){
      if(item1 === item2){
        sameItems.push(item1);
      }
    }
  }
  return sameItems.length === 0 ? !sameItems : sameItems;
}

console.log(compareArrays(food, food1));
console.log(compareArrays(food2, food3));
