/**
 Write a function that takes one argument n, an integer.
Print out all the numbers between 1 to n.
If the number is only divisible by 7 print “BOOM”
If the number is divisible by 7 and also includes the digit 7 print “BOOMBOOM”
If either of the above cases print the number.
Example of numbers between 1 to 18:
1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18
Hint:
Use the includes method to find out if the number includes a 7.
 */

'use-strict'

boom(71);


function boom(num){

  let numArray = []; 

  for (let i = 1; i <= num; i++){
    let element = ''; 
    if (i % 7 === 0){
      element += 'BOOM';
      if ((i.toString()).includes('7')){
        element += '-BOOM';
      }
    } else {
      element += i;
    }
    numArray.push(element);
  }

  // print 
  resultStr = '';
  for (let i = 0; i < numArray.length; i++){

    if (i === numArray.length-1){
      resultStr += numArray[i] ;
    } else {
      resultStr += numArray[i] + ',';
    }
  }

  console.log(resultStr);
}