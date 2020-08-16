/*
    JavaScript - Primitive Data Types

    The following exercise contains the following subjects:
        * String
        * undefined

    Instructions:

        * String Tasks:

            
          
            3) Write two string variables with the same word, in a way that when compared will result in false.
            4) Get the length of the String from the first task.
            5) Combine these two Strings "Hello" and "World" using as many different ways you can (at least 3).

        * undefined Tasks:
            1) Create an undefined variable in two differnet ways. 
            2) Check if a variable is undefined in two differnet ways.

    Submit the file to Hive
*/

/* String Tasks: */
//1) Write the phrase "Welcome to Full-Stack Bootcamp" as a String in 5 different ways.

let str1 = "Welcome to Full-Stack Bootcamp";
let str2 = 'Welcome to Full-Stack Bootcamp';
let str3 = `Welcome to Full-Stack Bootcamp`;
let place = `Full-Stack Bootcamp`
let str4 = `Welcome to ${place}`;
let str5 = `Welcome to ` + place;

// 2) Get the first letter of the word "Bootcamp" using two different ways.
let bootcamp = 'Bootcamp';
console.log("way: " + bootcamp.charAt(0) + " way: " + bootcamp[0]);