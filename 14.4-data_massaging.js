`us-strict`
/**
 # Note: We ask you not to solve the bug by finding it with your
eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First find the line that contains the problem. Write it down.-> 89
2. Which debug method did you use to find the bug? -> breakpoint
3. Explain the bug in your own words. -> execute object function on array
4. Fix the code and submit it all.
Please copy the code from the school solution from the exercise 10.1 data
massaging.
I gave faulty code.
 */

const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: [
      {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    ],
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: [
      {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    ],
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: [
      {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    ],
  },
];

const names = (arr) => {
  return arr.map((el) => {
    return el.name;
  });
};

const born = (arr) => {
  return arr.filter((item) => {
    const birthday = new Date(item.birthday).getFullYear();
    if (birthday < 1990) {
      return item;
    }
  });
};

const food = (arr) => {
  const obj = {};

  arr.forEach((el) => {
    el.favoriteFoods.forEach((foodObj) => {
      console.log(foodObj);
      foodObj.meats.forEach((meatItem) => {
        console.log(meatItem);
        // obj[meatItem] = obj[meatItem] + 1 || 1;
      });
      foodObj.fish.forEach((fishItem) => {
        obj[fishItem] = obj[fishItem] + 1 || 1;
      });
    });
  });
  return obj;
};

console.log(food(data));
