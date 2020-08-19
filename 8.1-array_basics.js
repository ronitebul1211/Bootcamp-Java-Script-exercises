'use-strict'

//For each of the questions below, answer the question’s with this array:
//const people = ["Greg", "Mary", "Devon", "James"];
let people = ["Greg", "Mary", "Devon", "James"];

//1. Using a loop, iterate through this array and console.log all of the people.
// for(let i = 0; i < people.length; i++){
//   console.log(people[i]);
// }

//2. Write the command to remove "Greg" from the array.
people.shift();
//TEST
//console.log(people);

//3. Write the command to remove "James" from the array.
people.pop();
//TEST
//console.log(people);

//4. Write the command to add "Matt" to the front of the array.
people.unshift("Math");
//TEST
//console.log(people);

//5. Write the command to add your name to the end of the array.
people.push("Roni");
//TEST
//console.log(people);


//6. Using a loop, iterate through this array and after console.log-ing "Mary",exit from the loop.
// for(let i = 0; i < people.length; i++){
//   console.log(people[i]);
//   if (people[i] === "Mary"){return}
// }

//7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let peopleCopy = people.slice(2);
//TEST
//console.log(peopleCopy);


//8. Write the command that gives the indexOf where "Mary" (1) is located.
let maryIndex = people.findIndex(name => name === "Mary");
//TEST
//console.log(maryIndex);

//9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
let fooIndex = people.findIndex(name => name === "Foo");
//TEST
//console.log(fooIndex);

//10. Redefine the people variable with the value you started with. Using the splice command,
//    remove "Devon" from the array and add "Elizabeth" and "Artie".
//    Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
// people = ["Greg", "Mary", "Devon", "James"];
// let devonIndex = people.findIndex(name => name === "Devon");
// people.splice(devonIndex, 1, "Elizabeth", "Artie");
//TEST
//console.log(people);

//11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat("Bob");
//TEST
//console.log(withBob);