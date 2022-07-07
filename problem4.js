const years=[]
const problem4 =(inventory, car_year)=>{
let ted=[]
for (let i = 0; i < inventory.length; i++) {
  years.push(inventory[i].car_year);
}
return years
}
module.exports=problem4
