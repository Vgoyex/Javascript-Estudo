  fetch("pcn.json")
    .then((data) => {
        return data.json();
    })
    .then((data2) => {
        console.log(data2);
        return recebeData2(data2);
    });

  function recebeData2(data){
    let table = document.createElement("table")

    for(let x of data){
        let tr = document.createElement('tr')
        
        let coluna1 = document.createElement('td')
        coluna1.innerText = x.name
        tr.appendChild(coluna1)

        let coluna2 = document.createElement('td')
        coluna2.innerText = x.email
        tr.appendChild(coluna2)
        
        table.appendChild(tr)

        console.log(x.name)
    }
    let d1 = document.querySelector(".d1")
    d1.appendChild(table)
  }