//? Modulos-js

// De repente en medio de mi codigo, me gustaria usar una funcion de otro archivo

//! para importar algo por defecto no uso llaves Y LO PUEDES LLAMAR COMO QUIERAS PORQUE SOLO HAY UNA EXPORTACION
import sumarcillo from './helpers/operaciones.js'
//! para importar de forma nombrada uso llaves Y DEBES RESPETAR LOS NOMBRES POR SER DESESTRUCTURACION DE OBJETOS
import { multiplicar, restar as restarcillo } from './helpers/operaciones.js';
//! podemos poner todo en la misma linea
// import sumarcillo, { multiplicar, restar } from './helpers/operaciones.js';

//* podemos poner alias a las exportaciones nombradas usando _as_


const num1 = 7;
const num2 = 9; 


console.log(sumarcillo(num1, num2))
console.log(multiplicar(num1, num2))
console.log(restarcillo(num1, num2))