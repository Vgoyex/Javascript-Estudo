function first() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("First function");
      resolve();
    }, 1000);
  });
}

async function second() {
  console.log("inicio");

  await first();
  let a = await getUsr(3);
  console.log(a.data.first_name + ` ` +  a.data.last_name)

  console.log("fim");
}

second();


function getUsr(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => {
        return data.json()
    }).catch(err => console.log(err))
}