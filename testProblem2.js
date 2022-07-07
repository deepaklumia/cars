const problem2 = require("/home/sumit/Desktop/car-main/problem2.js");

const inventory = require("/home/sumit/Desktop/car-main/cars.js");
let id=inventory.length
let we = problem2(inventory, id)
console.log(
        ` Last car is a ${we.car_make} ${we.car_model}`
      );

