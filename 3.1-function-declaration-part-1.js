/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     console.log('run');
//     return welcome;
// }

const welcome = () => 'Welcome to Appleseeds Bootcamp!';


// From function declarations to function expressions
// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }

const power = a => Math.pow(a, 2);


// From function declarations to function expressions
// function add(a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
// }

const add = (a, b = 5) => a + b;



// From function expressions to function declarations
// const hello = () => "Hello!";

function hello(){
    return "Hello!";
} 

// From function expressions to function declarations
// const squareRoot = a => Math.sqrt(a);

function squareRoot(a){
    return Math.sqrt(a);
}

// From function expressions to function declarations
// const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers(a, b){
    return  Math.random() * (a - b) + b;
}



