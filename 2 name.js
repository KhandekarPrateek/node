//local name secretName will not be shared
const secretName = "a";
//below names will be shared
//export is a property of module object and we will it with stuff needed to be shared among files
const b = "b";
const c = "c";
module.exports = { b, c };
// console.log(module);
