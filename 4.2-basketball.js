/**
John and Mike both play basketball in different teams. 
In the latest 3 games,
John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the
winner to the console. Also include the average score in the output.

3. Then change the scores to show different winners. Don't forget to take into
account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
points. Like before, log the average winner to the console.
5. Like before, change the scores to generate different winners, keeping in
mind there might be draws
 */

'use-strict'

let johnTeamScores = [89, 120, 109];
let mikeTeamScores = [116, 94, 123];



// Calculate the average score for each team
let johnTeamAverageScore = getAverageScore(johnTeamScores);
let mikeTeamAverageScore = getAverageScore(mikeTeamScores);

// print winner 
if(johnTeamAverageScore > mikeTeamAverageScore) {
  console.log(`wining: john Team with average score: ${johnTeamAverageScore}`)
}
else if( mikeTeamAverageScore > johnTeamAverageScore){
  console.log(`wining: mike Team with average score: ${mikeTeamAverageScore}`)
}
else{
  console.log(`draw: mike Team and john Team average score: ${mikeTeamAverageScore}`)
}

// Change scores
johnTeamScores[0] = 120;
mikeTeamScores[0] = 89;


// Calculate the average score for each team
johnTeamAverageScore = getAverageScore(johnTeamScores);
mikeTeamAverageScore = getAverageScore(mikeTeamScores);

// print winner 
if(johnTeamAverageScore > mikeTeamAverageScore) {
  console.log(`wining: john Team with average score: ${johnTeamAverageScore}`)
}
else if( mikeTeamAverageScore > johnTeamAverageScore){
  console.log(`wining: mike Team with average score: ${mikeTeamAverageScore}`)
}
else{
  console.log(`draw: mike Team and john Team average score: ${mikeTeamAverageScore}`)
}

/** Get Average Score from scores array*/
function getAverageScore(scoresArray){
  let scoresSum = 0;
  for(let x = 0; x < scoresArray.length; x++ ){
    scoresSum += scoresArray[x];
  }
  return scoresSum / scoresArray.length;
}
