/**
 Without running the code below, explain in your own words what the result
 of each block of code will be and why.
 */

// var b = 1;

// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }

// var firstResult = someFunction(9); //otherFunction b=5
// var result = firstResult(2); // = otherFunction(2)

/**
 line 16 - first result = otherFunction object
 line 17 - result = call otherFunction() and pass 2  = 5
 */

// var a = 1;

// function b2() {
//   a = 10; 
//   return;
  
//   function a() { }
// }

// b2(); 
// console.log(a); //1
/**
 inside b2() -> hoisting: function a(), a=10, means a get value of 10 instead of a fun
 log 1
 */



let i;
for (i = 0; i < 3; i++) {
 const log = () => {
  console.log(i);
  }
  console.log(setTimeout(log, 100));
  
}

/**
 first iteration: i = 0, 1.setTimeout(invoke when finish loop- no parallel execution)
 second iteration: i = 1, 2.setTimeout(invoke when finish loop- no parallel execution)
 third iteration: i = 2, 3.setTimeout(invoke when finish loop- no parallel execution)
 forth iteration i = 3, exit loop, begin execute in order set timeout from 1-3
 */