let only = [];
const problem6 = (inventory,car_make) => {
 for (let i = 0; i < inventory.length; i++) {
   if (inventory[i].car_make == "Audi" || inventory[i].car_make == "BMW") {
     only.push(inventory[i]);
   }
 }
 const str = JSON.stringify(only);
return str
  }
module.exports = problem6;
