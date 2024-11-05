//? metodos de los arrays

const frutas = ['me', 'to', 'yo', 'el']
const nums = [1, 5, 67, 54, 3, 2]

console.log(Array.isArray(nums));

//* ESTOS METODOS MUTAN EL ARRAY ORIGINAL
//* añadir elementos al final del array: 

frutas.push('ellos')
console.log(frutas);

frutas.push('ellos', 'maria', 'juan')
console.log(frutas);

frutas.push(...nums,'ellos', 'maria', 'juan')
console.log(frutas);


//* quitar elementos de la ultima posicion

frutas.pop()
frutas.pop()
frutas.pop()
frutas.pop()
frutas.pop()
console.log(frutas)

//* meter y quitar elementos del principio

frutas.unshift('tomaya')
console.log(frutas);
frutas.shift()
console.log(frutas);

//* indexOf(valor) devuelve el indice del valor que indicas

console.log(frutas.indexOf('ellos'));
 
//* includes(valor) devuelve boolean de si lo incluye o no 

console.log(frutas.includes('osian'));
console.log(frutas.includes('ellos'));

//* metodo para invertir en un nuevo array: 

nuevaFruta = frutas.toReversed()
console.log(nuevaFruta);

//* metodo para unir en un nuevo string usando el separador que le pongas (contrario de split)

newString = frutas.join(' ')
console.log(newString);


//* .slice(corteInicial, corteFinal) pare que te de una copia de un pedazo de un trozo de array

const numeritos = [1, 2, 3, 4, 5]
const trozoDeNums = numeritos.slice(1,4)
console.log(trozoDeNums);
console.log(numeritos);

//* .splice(corteInicial, cantidadACortar) paque que QUITE DEL ARRAY ORIGINAL ELEMENTOS y puedes meter elementos en esa posicion

const numeritos2 = [1, 2, 3, 4, 5]
const trozoDeNums2 = numeritos2.splice(1,4, 'perro')
console.log(trozoDeNums2);
console.log(numeritos2);

//* .toSpliced() no MUTA EL ORIGINAL, TE DEVUELVE UNO NUEVO

const numeritos3 = [1, 2, 3, 4, 5]
const trozoDeNums3 = numeritos3.toSpliced(1,4, 'perro')
console.log(trozoDeNums3);
console.log(numeritos3);