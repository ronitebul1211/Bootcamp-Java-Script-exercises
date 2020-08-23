`use-strict`

/**
 Write the following functions using the reduce built-in function.



 */


 const dummyArray = [10, 2, 5, 89, 65, 100];

// 1. get max
 const getMaxValue = function(acc, currentValue){
  return acc > currentValue ? acc : currentValue;
 };
// TEST
// console.log(dummyArray.reduce(getMaxValue));


 //2. sum of even numbers
 const getSumOfEvenNum = function(acc, currentValue){
  return currentValue % 2 === 0 ? currentValue + acc : acc
 };
// TEST
// console.log(dummyArray.reduce(getSumOfEvenNum, 0));

//3. average
const getSum = (acc, currentValue) => acc + currentValue;

const getAverage = (array) => {
  return array.reduce(getSum) / dummyArray.length;
}
//TEST
console.log(getAverage(dummyArray));
