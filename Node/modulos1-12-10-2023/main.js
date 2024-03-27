const md1 = require("./md1");

//* o que importa no nome é como exporto
const { People } = require("./md1");

let p1 = new People("Ff");
console.log(p1.name);

md1.lower("tEStE LoWeR")
