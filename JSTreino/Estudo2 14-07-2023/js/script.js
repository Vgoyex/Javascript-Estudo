function principal() {
  const form = document.querySelector(".formulario");
  const result = document.querySelector("#resultado");
  const ls = [];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("evento prev");
  });

  function exibeImc(event) {
    event.preventDefault();

    const mascaraPeso = "";
    const mascaraAltura = "";
    let mensagem;
    let resultado = result;

    let objImc = calculaImc();
    let resultImc = objImc.resultadoFinal;

    if (resultImc == `NaN` || resultImc == undefined) {
      resultImc = `Valores inseridos incorretamente ${"Peso: " + objImc.peso} ${
        "Altura: " + objImc.altura
      }`;
    }

    ls.push(resultImc);
    console.log(ls);

    mensagem = validaMensagem(resultImc);

    let erro = (() => {
      resultado.classList.add("fundo-error");
      if (!objImc.peso && !objImc.altura) {
        return (resultado.innerHTML = `Altura e Peso Inválidos`);
      }
      if (!objImc.peso) {
        return (resultado.innerHTML = `Peso Inválido`);
      }
      if (!objImc.altura) {
        return (resultado.innerHTML = `Altura Inválida`);
      } else {
        return null;
      }
    })();

    if (!erro) {
      resultado.classList.remove("fundo-error");
      resultado.classList.add("fundo-success");
      resultado.innerHTML = `IMC: ${resultImc}  ${mensagem}`;
    }

    //* Outro método de fazer, porém sempre adicionando mais
    //* itens
    //*
    //* const p = document.createElement('p');
    //* let erro = (()=>{
    //*     p.classList.add('fundo-error');
    //*     if(!objImc.peso && !objImc.altura){
    //*         p.innerHTML = `Altura e Peso Inválidos`;
    //*         return resultado = resultado.appendChild(p);
    //*     }
    //*     else if(!objImc.peso){
    //*         p.innerHTML = `Peso Inválido`;
    //*         return resultado = resultado.appendChild(p);
    //*     }
    //*     else if(!objImc.altura){
    //*         p.innerHTML = `Altura Inválida`;
    //*         return resultado = resultado.appendChild(p);
    //*     }else{
    //*         return null;
    //*     }
    //* })();

    //* if(!erro){
    //*     p.classList.remove('fundo-error');
    //*     p.classList.add('resultado');
    //*     p.innerHTML = `IMC: ${resultImc}  ${mensagem}`;
    //*     resultado.appendChild(p);
    //* }
  }

  function calculaImc() {
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    let pesoValue = parseFloat(peso.value);
    let alturaValue = parseFloat(altura.value);
    let resultImc = pesoValue / (alturaValue * alturaValue);
    let finalResult = {
      resultadoFinal: resultImc.toFixed(3),
      peso: pesoValue,
      altura: alturaValue,
    };
    return finalResult;
  }

  function validaMensagem(result) {
    if (result < 18.5) {
      return `Abaixo do peso`;
    }
    if (result > 18.5 && result <= 24.9) {
      return `Peso normal`;
    }
    if (result >= 25 && result <= 29.9) {
      return `Sobrepeso`;
    }
    if (result >= 30 && result <= 34.9) {
      return `Obesidade grau 1`;
    }
    if (result >= 35 && result <= 39.9) {
      return `Obesidade grau 2`;
    }
    if (result > 40) {
      return `Obesidade grau 3`;
    }
  }

  const calcula = form.addEventListener("submit", exibeImc);
}

principal();
