/*
cpf = 44639256818

4   4  6  3   9  2  5   6  8  1  8
x   x  x  x   x  x  x   x  x  x  x
10  9  8  7   6  5  4   3  2  1  0
40  36 48 21  54 10 20  18 16 1  0 = 264

*/

function validaCPF(cpf) {
  cpf = String(cpf);
  let aux = [];
  let tx = 10;
  for (let i = 0; i < cpf.length; i++) {
    let re = [...cpf];
    let time = tx * parseInt(re[i]);
    tx--;
    aux.push(time);
  }
  let total = aux.reduce((acumu, element) => {
    return acumu + element;
  }, 0);
  let formula = 11 - (total % 11);
  if (formula == 11) return true;
}

const c = validaCPF(44639256817);
console.log(c)
