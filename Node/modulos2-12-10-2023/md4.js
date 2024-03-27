module.exports = function () {
  return new Promise((resolve,reject) => {
    let url = ""
    fetch("",{
        method:"GET",
    }).then(data => {return data.json()}).then(console.log(data)).catch(error => {
        console.log(`Erro catch `, error)
        return error
    })
  });
};
