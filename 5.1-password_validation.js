/**
 Create a simple password validation function that takes a password string as an argument.

 If the passwords length is more than 7 characters return “Strong”. If it is less than 7 characters long return “Weak.
1) Create a function that uses a if/else conditional expression.
2. Create a function that uses a ternary conditional expression.
3. Create a function that uses a conditional abuse expression.

Create an “advanced” password validation function that takes a password
string as an argument.
If the password length is more than 7 characters long and has at least one
capital letter return “Very Strong”.
If the password length in only 7 characters long return “Strong”.
If the password length is less than 7 characters long return “Weak”
Use only a ternary conditional expression.
 */

 console.log(passwordValidation1(`0789`));
 console.log(passwordValidation2(`0789`));
 console.log(passwordValidation3(`01789`));
 console.log(advancedPasswordValidation(`pa`));



 /** if/else conditional expression. */
 function passwordValidation1(password){
   if (password.length > 7){
     return `strong`;
   } else {
     return `weak`;
   }
 }

 /** ternary conditional expression. */
 function passwordValidation2(password){
  return password.length > 7 ? `strong` : `weak`;
}

/** conditional abuse expression. */
function passwordValidation3(password){
  return (password.length > 7 && `strong`) || `weak`;
}

/** “advanced” password validation function */
function advancedPasswordValidation(password) {
  return /[A-Z]/.test(password) && password.length > 7 
  ? `very strong` // if true
  : password.length > 7 //else
  ? `strong`
  : `weak`;
}



