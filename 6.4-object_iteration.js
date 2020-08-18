//1. Create a function that receives 1 argument, an object 
//   and returns a new object with the properties and values swapped.

`use-strict`

let object = { a:`A`, b:`B`, c:`C` };

function swapPropertiesAndValues (object){
  let newObject = {};
  for (property in object) {
    newObject[object[property]] = property;
  }
  return newObject;
}


console.log(swapPropertiesAndValues(object));
