// const inventory = require("./cars.js");
const problem3 = (inventory,car_model) => {
let empty = [];
 for (let i = 0; i < inventory.length; i++) {
  empty.push(inventory[i].car_model);
 }
 let se =
 empty.sort();
 return se
   }
module.exports = problem3;
