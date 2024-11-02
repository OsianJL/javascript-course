//? Operadores matematicos

//*Sumar 

const num1 = 5; 
const num2 = 7; 

console.log('num1 + num2: ', num1 + num2)

nombre = 'osian'
apellido = 'jorge'

const nombreCompleto = `Mi nombre completo es ${nombre} ${apellido}.`

console.log(nombreCompleto);

//! Cosas raras del simbolo +
//* Si uno de los valores es un string te va a convertir todo en un string concatenado

console.log(5 + 5)
console.log('5' + 5)
console.log(5 + undefined)
console.log(5 + true)
console.log('5' + undefined)
console.log('5' + true)


//! Cosas raras del simbolo -
//* Si uno de los dos es un number, va intentar transformar el otro en number

console.log(5 - 2)
console.log('5' - 2)
console.log(5 - undefined)
console.log(5 - true)
console.log('5' - undefined)
console.log('5' - true)

//* Modulo --> %

console.log(10 % 5);
console.log(10 % 3);
console.log(10 % 4);
console.log(5 % 10);

//* solemos usarlo para saber si un numero es multiplo de otro, par o impar
//* para que sea multiplo tiene que tener un modulo cero


//? EXTRAS

//* Decidir cuantos decimales quiero en un numero

const division = 10/3; 
console.log(division)

const divisionDosDecimales = division.toFixed(4) 
console.log(divisionDosDecimales)

//* Convertir un string a un number

const divisionEntera = parseInt(divisionDosDecimales)
console.log(divisionEntera);

const divisionEnteraNumero = parseInt(division)
console.log(divisionEnteraNumero);

const divisionFlotante = parseFloat(divisionDosDecimales)
console.log(divisionFlotante);

const divisionNumber = Number(divisionDosDecimales)
console.log(divisionNumber);

//! manera rara de convertir a number con el simbolo +

const divisionPlus = +divisionDosDecimales;
console.log(divisionPlus);


//! de esta manera es más complicado de ver
const division2 = Number((10 / 3).toFixed(2))
console.log(division2);


//* de esta manera se ve como un libro
const division3 = 10/3; 
const division3ToDecimals = division3.toFixed(2)
const division3Number3 = Number(division3ToDecimals)
console.log(division3Number3);

