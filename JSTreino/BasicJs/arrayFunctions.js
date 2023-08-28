const pessoas = [
    {nome:`F`, idade:19},
    {nome:`B`, idade:56},
    {nome:`H`, idade:14},
    {nome:`W`, idade:17},
];
let showName = pessoas.map(obj => obj.nome);
let showAge = pessoas.map(array => ({idade: array.idade}));
let createId = pessoas.map(function(array, indice){
    array.id = (indice + 1);
    return array;
});

let newObjWId = pessoas.map(function(array, indice){
    let newObj = {...array};
    array.id = (indice + 1);
    return newObj;
});
console.log(newObjWId);