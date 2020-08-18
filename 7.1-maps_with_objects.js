/**
1. Create 3 separate objects that their key is called name and their value is a string. Store them in separate variables.
2. Create a new Map object that sets each object as a key and assign an id number as the value.
3. Iterate over the Map object with the for..of loop log the name and id
4. Iterate over the Map object with the forEach loop log the name and id

 */

`use-strict`
//1. Create 3 separate objects that their key is called name and their value is a string. Store them in separate variables.
let object1 = {name: `Sally`};
let object2 = {name: `Keren`};
let object3 = {name: `Lili`};

//2. Create a new Map object that sets each object as a key and assign an id number as the value.
let map = new Map();
map.set(object1, `1g2dd`);
map.set(object2, `1g2df`);
map.set(object3, `1g2dk`);

//3. Iterate over the Map object with the for..of loop log the name and id
for (entry of map) {
  console.log(entry);
  // console.log(`${entry[0][`name`]} ${entry[1]}`);  
}

//4. Iterate over the Map object with the forEach loop log the name and id
map.forEach((value, key) => {
  console.log(key,value);
    
});