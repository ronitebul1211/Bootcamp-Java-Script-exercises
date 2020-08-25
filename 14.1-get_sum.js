`use-strict`

/**
  # Note: We ask you not to solve the bug by finding it with your
  eyes but to use the debugging tools we've learned!
  What is wrong with this code?
  1. First find the line that contains the problem. Write it down. -> 15, 23
  2. Which debug method did you use to find the bug? -> breakpoint in line 23+ step into 
  3. Explain the bug in your own words -> arr1 is undefined because of missing comma,
  4. Fix the code and submit it all.
 */

function getSum(arr1, arr2){
  let sum = 0;
  console.log(arr1.length);
  for (let i=0; i < arr1.length; i++){
  sum += arr1[i];
  }
  for (let i=0; i < arr2.length; i++){
  sum += arr2[i];
  }
  }

  console.log();
  console.log();
  console.log();
  console.log();
  getSum([1,2,3],[5,66,23]);
  console.log();
  console.log();