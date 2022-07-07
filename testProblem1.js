const problem1 = require("./problem1.js");

const inventory = require("./cars.js");

let id=33
let we = problem1(inventory,id)
let emp=[]
console.log(`Car ${we.id} is a ${we.car_year} ${we.car_make} ${we.car_model}`); 

problem1(id)
