// XMLHttpRequest, função request "padrão" antigo
let requestOLD = function (obj) {
  //xhr -> XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();
  xhr.addEventListener("load", function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error({
        code: xhr.status, //Codigo do status, ex -> 200
        message: xhr.statusText, //Mensagem da resposta, ex -> OK
      });
    }
  });
};

let a = async function () {
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
  });
};


//Jeito de criar a request/ajax, basicamente a função de request, só que com Promise
let requestNEW = async function (obj) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject({
          code: xhr.status, //Codigo do status, ex -> 200
          message: xhr.statusText, //Mensagem da resposta, ex -> OK
        });
      }
    });
  });
};

function init() {
  let xhr = new XMLHttpRequest();
  console.log(xhr);
  //Captura clicks nas tags <a>
  document.addEventListener("click", (e) => {
    let el = e.target;
    let tag = el.tagName.toLowerCase();
    if (tag == "a") {
      e.preventDefault();
      loadPage(el);
    }
  });
}

async function loadPage(element) {
  let href = element.getAttribute("href");

  //============= Jeito Novo com Promise ================================
  requestNEW({
    method: "GET",
    url: href,
  })
    .then((response) => {
      loadResult(response);
    })
    .catch((error) => {
      console.log(error);
    });

  // ======================================================================

  //============= Jeito mais Novo e melhor com Async e await =============
  try {
    let novo = await requestNEW({method: "GET", url: href});
    loadResult(novo);
  } catch (error) {
    console.log(error);
  }
  // ======================================================================

  //============= Jeito mais Novo e melhor com Async e await =============
  requestOLD({
    method: "GET",
    url: href,
    success(response) {
      loadResult(response);
    },
    error(error) {
      console.log(error);
    },
  });
  // ======================================================================
}

function loadResult(response) {
  //Seleciona a classe result no html e carrega o que "pegamos"  no get
  let result = document.querySelector(".result");
  result.innerHTML = response;
}
init();
