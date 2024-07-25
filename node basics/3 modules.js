const sayName = (name) => {
  console.log(`hello bro ${name}`);
};
module.exports = sayName;

//another ways to export
module.exports.item = ["items1", "items2"];
