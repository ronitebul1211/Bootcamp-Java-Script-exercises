/**
 Write a function that calculates the circle area by a given radius as an
argument. Print the area as it is calculated and then print it rounded to two
decimal places.
 */

circleArea(5);

function circleArea(radius) {
  let area = Math.PI * (radius * radius);
  console.log(area.toFixed(2));
}

