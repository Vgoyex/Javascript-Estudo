function main() {
  /*
		17. Escreva um programa que imprime todos os números primos positivos a partir do zero até um número digitado.
	*/
  console.log(" ========== EX 17 ============\n");

  let i, num, teste, auxiliar;
  num = 10;
  console.log("Digite um número: ");
  //   scanf("%d", num);
  console.log("0; 1; 2 ; ");

  //   for(i = 2; i<num;i++){
  //   	teste = num % i;
  //   	if(teste == 0){
  //     console.log("Número digitado %d não é um número primo\n", num);
  //   	  break;
  //   	}
  //     }

  for (i = 2; i <= num; i++) {
    for (auxiliar = 2; auxiliar <= num; auxiliar++) {
      teste = i % auxiliar;

      if (teste != 0) {
        console.log("%d ; ", i);
        break;
      }

      if (teste == 0) {
        auxiliar++
        
      }

    }
  }
}

main();
