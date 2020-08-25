
/**
  Without running the code below, explain in your own words what the result
  of each block of code will be and why.
  If there are any faulty outputs, please write on how we can fix them.
  FIX: declare a before it get called
 */

// function funcA() {
//   console.log(a); // undefined
//   console.log(foo());  // 2
//   var a = 1;
//   function foo() {
//   return 2;
//   }
//  }
//  funcA();
 /**
   execute line 9, a is global var inside function scope ,its exists but undefined (var hoisting)
   execute line 10, function foo called and return value of 2 that print to the console
  */
 
 var fullName = 'John Doe';
 var obj = {
    fullName: 'Colin Ihrig',
    prop: {
      fullName: 'Aurelio De Rosa',
      getFullName: function () {
      return this.fullName;
      }
    }
 };
console.log(obj.prop.getFullName()); //'Aurelio De Rosa'
var test = obj.prop.getFullName;  
console.log(test()); //undefined

 /**
  execute line 33, getFullName method get called, and return full name in prop scope (this)
  execute line 34, save getFullName function object in test var
  execute line 35, print undefined, because test represent standalone fun, that execute this without context.
  */

//  function funcB() {
//   let a = b = 0;
//   a++;
//   return a;
//  }

//  funcB();
//  console.log(typeof a); //undefined
//  console.log(typeof b); //num
/**
 execute line 44, declare a as let (fun scope) and b as (global scope)
*/


//  function funcC() {
//   console.log("1");
//  }
//  funcC(); // 2
//  function funcC() {
//   console.log("2");
//  }
//  funcC(); //2
 /**
  hoisting -> function declare on top of function calls, funcC()-line 60 shadow funcC()-line 56
  */


//  function funcD1() {
//   d = 1;
//  }

//  funcD1();
//  console.log(d); //1

//  function funcD2() {
//   var e = 1;
//  }

//  funcD2();
//  console.log(e) //exception
  /**
   line 75 - declare d as global scope 
   line 76 - print value of d
   line 78 - declare e as function local var
   line 82 - exception - try to access local scope from outside
   */

  function funcE() {
    console.log("Value of f in local scope: ", f);
   }

   console.log("Value of f in global scope: ", f); // Value of f in local scope: undefined

   var f = 1;

   funcE(); // Value of f in local scope: 1

   /**
    line 94 - f = undefined (hoisting f declare-not assign)
    line 96 - assign value to f
    line 98 - 1
    */

