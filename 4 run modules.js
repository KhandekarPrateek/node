const names = require("./2 name");
const sayName = require("./3 modules");
const data = require("./3 modules");
console.log(data.item); //accessing only item from data .i.e export object
// console.log(names);
sayName(names.b);
sayName("heloowowoowow");
//so this separates our name,function and it overall execution

//function running in mind grenade module ran here even though we did not assign it to any variable here

//meaning when we inport a module we invoke it
require("./5 mind grenade");
