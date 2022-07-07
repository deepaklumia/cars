// const inventory = require("./cars.js");
const years = require("./problem4.js")

let old=[]
const problem5=(inventory,car_year)=>{
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].car_year < 2000) {
    old.push(inventory[i]);
  }
}
return old.length
}
module.exports=problem5