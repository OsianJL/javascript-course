//? Arrays

const myNames = ['jesi', 'osi', 'peter']

console.log(myNames);
console.log(myNames['1']);
console.log(myNames['2']);
console.log(myNames['0']);

console.log(myNames.length)

//! puedo cambiar los elementos aunque la varible se const
myNames[1] =  'juan'

console.log(myNames);

myNames[6] = 'Amanda'

console.log(myNames);


//* Añadir algo al final con array.length. es como el push

myNames[myNames.length] = 'Bryan'

console.log(myNames);

//*===================================================*//

//* los strings funcionan 'parecido' a los arrays

const palabra = 'alegria'

console.log(palabra[3]);


//* ==================================

let valor1 = 23; 
let valor2 = valor1; 

console.log(valor1, valor2);


valor1 = 'hola'

console.log(valor1, valor2);


const arr1 = [1, 2]
const arr2 = arr1

console.log(arr1, arr2);


arr1[0] = 'hola'

console.log(arr1, arr2);

//* Como duplico un array sin modificar el original: ---> spread operator

const arr3 = [...arr1]
console.log(arr3);

arr1[1] = 'osian'

console.log(arr3);

//! arr3 es una copia nueva, no como los dos anteriores. 

console.log(...arr1, '👩‍🦲', ...arr3);

let arr4 = [5, 6, [4, 5]]


//* con este metodo hacemos un clon de los arrys normal y profundo. todo duplicado con referencias nuevas
numeros5 = structuredClone(arr4)
console.log(numeros5);
//* esta es la unica manera de copiar los arrays profundos


