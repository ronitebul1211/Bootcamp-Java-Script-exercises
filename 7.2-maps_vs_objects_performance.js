`use-strict`

//1. Create an empty Object and assign it to a variable
//2. Create an empty Map and assign it to a variable.
//3. Create an array of 10 value string names.
//4. Iterate over them with a simple for loop.
//5. Inside the loop assign the counter variable from the for loop as a key and value to the empty Object.

let object = {};
let map = new Map();
let array = [`A`, `B`, `C`, `D`, `E`, `F`, `G`,`H`, `I`, `J`];

for (let i = 0; i < array.length; i++){
  object[i] = array[i];
  map.set(i, array[i]);
}

//TEST - NEW map, object
// console.log(object);
// console.log(map);

console.time(`getObjPro`);
console.log(object[`9`]);
console.timeEnd(`getObjPro`);

console.time(`getMapPro`);
console.log(map.get(9));
console.timeEnd(`getMapPro`);


