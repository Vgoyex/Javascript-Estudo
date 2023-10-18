// Escreva um programa que imprima na tela os/
// números de 1 a 500 que são múltiplos de 5.

num = 5;
while (num <= 500) {
  //console.log(str(num)+", ",end="")
  num = num + 5;
}
console.log("\n\n");

function imprimir500(n) {
  if (n <= 502) {
    //condição de parada
    n = n + 5;
    imprimir500(n);
    //console.log(str(n)+", ",end="")
  }
}
imprimir500(5);

function imprimir10(i) {
  if (i < 10) {
    i = i + 1;
    //console.log(i,", ", end = "")
    imprimir10(i);
    return i;
    //console.log(i,", ", end = "")
  }
}
//console.log("\nO valor do retorno é{",imprimir10(-1))

//2. Escreva um programa que some os números
//   de 1 a 100 recursivamente.

function soma100(n, soma) {
  if (n <= 100) {
    //n = n + 1
    //soma soma + n
    soma = soma100(n + 1, soma + n);
    return soma;
  }
}
//Qual a diferença de i++ e ++i?

//console.log("\n\nO valor da soma é{",soma100(1,0))

//3. Escreva um programa que imprima os numeros e calcule e retorne a soma
//   dos de todos eles. Sendo esse números pares entre 25 e 200.

function somarPares(n, soma) {
  if (n <= 200) {
    if (n % 2 == 1) {
      n = n + 1;
      //console.log(str(n)+", ",end="")
      soma = somarPares(n + 2, soma + n);
      return soma;
    }
  }
}
//console.log("\n\nO valor da soma é{",somarPares(25,0))

//4. Faça um programa que calcule a multiplicação de dois números
//   através de somas sucessivas.

function mult(n, x, soma) {
  if (x > 0) {
    soma = mult(n, x - 1, soma + n);
    return soma;
  }
}
console.log("\n\nO valor da multiplicação é{", mult(4, 5, 0));
