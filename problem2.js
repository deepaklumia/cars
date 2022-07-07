// const inventory = require("./cars.js");

const problem2 = (inventory,id) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id == inventory.length) {
    return inventory[i]
    }
  }
}
module.exports = problem2;
