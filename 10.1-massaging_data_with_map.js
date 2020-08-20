`use-strict`

//We are getting this data from an API:
const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
 ];

 //1. Create a function that returns an array of all the names from the object.
 const getNames = (peoples) => peoples.map(people => people.name);
 //TEST
 //console.log(getNames(data));

 //2. Create a function that returns all the objects that are born before 1990.
function getPeopleBornBefore1990(peoples){
  return peoples.filter((people) => {
    const yearObBirth = new Date(people.birthday).getFullYear();
    return yearObBirth < 1990;
  });
}
//TEST
//console.log(getPeopleBornBefore1990(data));

//3. Create a function that returns an object of all the different foods from all
//   the objects as the key and the number of times that food is present in all the
//   objects as the value.

const getFoodCounter = (array) => {

  const foodCounter = {};

  array.forEach((people) => {
    people.favoriteFoods.meats.forEach((meatType) => {
      foodCounter[meatType] = foodCounter[meatType] + 1 || 1;
    });
    people.favoriteFoods.fish.forEach((fishType) => {
      foodCounter[fishType] = foodCounter[fishType] + 1 || 1;
    });
  });

  return foodCounter;
};
//TEST
//console.log(getFoodCounter(data));
;



  




