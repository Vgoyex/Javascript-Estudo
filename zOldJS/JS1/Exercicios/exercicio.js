function Ex(numbers){
    const soma = numbers.reduce((accum, num)=> accum + num,0)
    return soma/numbers  
}

console.log(Ex([1,2,3,4,5,6,7]))