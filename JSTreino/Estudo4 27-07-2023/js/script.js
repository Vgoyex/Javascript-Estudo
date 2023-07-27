function main() {
  const container = document.querySelector(".container");
  const div = document.querySelector(".here");

  const elements = [
    { tag: "p", frase: "Frase 1" },
    { tag: "div", frase: "Frase 2" },
    { tag: "footer", frase: "Frase 3" },
    { tag: "section", frase: "Frase 4" },
  ];

  for (let i = 0; i < elements.length; i++) {
    let { tag, frase: texto } = elements[i];
    let createTag = document.createElement(tag);
    let createText = document.createTextNode(texto);
    createTag.appendChild(createText);
    div.appendChild(createTag);

    /*
    //* Métodos possíveis a serem utlizados ↧
    //*=============================//=========================//
    //* Método utilizando .innerHTML
    //* createTag.innerHTML = texto;
    //*=============================//=========================//
    //* Método utilizando .innerText
    //* createTag.innerText = texto;
    //*=============================//=========================//
    //* Método com NodeText
    //* let createText = document.createTextNode(texto);
    //* create.appendChild(texto);
    */
  }
}
main();
