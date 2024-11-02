//? Tipos de datos

//? Primitivos

//* Strings - cadenas de texto

const nombre = 'Osian'
const apellido = 'Jorge'
const varConSaltoDeLineaBackticks = `esto es un texto 
con salto de linea`
const ciudad = 23456
const isHappy = false

console.log(typeof apellido)
console.log(typeof ciudad)
console.log(typeof isHappy)


//* Numbers - todos los numeros

const edad = 23; 
const temperatura = 30.6; 
const negativo = -4.5; 

//* Booleans - valores on/off

const isMarried = false; 
const hasChildren = true; 

console.log(isMarried);


//* Undefined - cuando no hemos dado ningún tipo de valor de forma explícita

let city; 
console.log(city);

//* Null - yo le pongo null para que algo guarde nada como valor

const password = null; 
const osian = '';

console.log(typeof osian)
console.log(typeof password)
//esta es la manera de comprobar si hay un null....
console.log(password === null);


//? Bigint se escriben con una n al final

//? Symbol()

//*========================================================*//

//? No Primitivos

//* Arrays -- []

const amigos = ['osian', 'pedro', 'juan'];
const edades = [34, 34, 56]
const mix = [23, 'osian', true]


//* Objetos -- {}

const user = {
    userName: 'Osian', 
    age: 43,
    height: 180,
    isMarried: false, 


}

//* Funciones -- function () {} o () => {}

   function sumar1 () {
    return a + b
   } 

   const sumar2 = (a, b) => {return a + b}
