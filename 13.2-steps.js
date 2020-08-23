`use-strict`
/**
  You are given two arrays:
  Write a function that has one argument, a positive integer. 
  Lets call it N. The function should console log a step shape.
  With N levels using the # character. Make sure the step has spaces on the right hand side!

 */

 function steps (n) {
  for(let i = 0; i<n; i++){
    console.log('#'.repeat(i + 1));
  }
 }

 steps(4);