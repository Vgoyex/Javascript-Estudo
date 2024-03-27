type FilterCallback<U> = (value: U, index?: Number, array?: U[]) => boolean;

function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
    const newArray: T[] = [];
    
    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            // newArray.push(array[i]);
        }
    }
    
    return newArray;
}

const a = [1, 2, 3, 4, 5];
const arrayFiltrado = meuFilter(a, value => value < 5);

console.log(arrayFiltrado);