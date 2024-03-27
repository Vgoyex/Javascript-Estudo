const soma = require("./calc");
const Pc = require("./pc");
const md4 = require("./md4")

soma(10, 10);

let pc1 = new Pc("b550", "i7-10300", "8gb2x-", "1Tb");
// pc1.showConfig()

console.log(__filename); //*nome arquivo atual
console.log(__dirname); //* nome diretório/pasta atual
