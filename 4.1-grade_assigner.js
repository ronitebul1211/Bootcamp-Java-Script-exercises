/**
 Create a function that takes 1 argument, a number score.
 Returns either “A”, ”B”, “C”, “D”, “F”.
 score of:
  0-64 is a “F”
  65-69 is a “D”
  70-79 is a “C”
  80-89 is a “B”
  90-100 is an “A
 */

'use-strict'

function assignGrade(numericScore){
  
  if (numericScore >= 90){
    return 'A'
  } else if (numericScore >= 80){
    return 'B'
  } else if (numericScore >= 70){
    return 'C'
  } else if (numericScore >= 65){
    return 'D'
  } else{
    return 'F'
  }
}