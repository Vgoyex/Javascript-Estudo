function principal() {
  const form = document.querySelector(".formulario");
  const result = document.querySelector(".resultado");
  const peso = form.querySelector(".peso");
  const altura = form.querySelector(".altura");
  const ls = [];

  form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('evento prev');
  });

  function calculaImc(event){
    event.preventDefault();
    debugger;
    let mensagem;
    let resultado;
    const mascaraPeso = '';
    const mascaraAltura = '';
    let pesoValue = parseFloat(peso.value);
    let alturaValue = parseFloat(altura.value);
    let resultImc = pesoValue/(alturaValue*alturaValue);
    
    console.log(typeof(pesoValue));

    class Pinto{

    }
    let boj;

    ls.push(resultImc);
    console.log(ls);
    
    if(resultImc < 18.5){
        mensagem = `Abaixo do peso`;
    }
    else if(resultImc > 18.5 && resultImc <= 24.9){
        mensagem = `Peso normal`;
    }
    else if(resultImc >= 25 && resultImc <= 29.9){
        mensagem = `Sobrepeso`;
    }
    else if(resultImc >= 30  && resultImc <= 34.9){
        mensagem = `Obesidade grau 1`;
    }
    else if(resultImc >= 35 && resultImc <= 39.9 ){
        mensagem = `Obesidade grau 2`;
    }
    else if(resultImc > 40){
        mensagem = `Obesidade grau 3`;
    }
    
    if(!pesoValue && !alturaValue){
        resultado = result.innerHTML = `Altura e Peso Inválidos`;
    }
    else if(!pesoValue){
        resultado = result.innerHTML = `Peso Inválido`;
    }
    else if(!alturaValue){
        resultado = result.innerHTML = `Altura Inválida`;
    }
    else{
        resultado = result.innerHTML = `IMC: ${resultImc.toFixed(3)}  ${mensagem}`;
    }
    
}

const calcula = form.addEventListener("submit", calculaImc);
}
principal();
