//? Condicionales

num1 = 5; 
num2 = 10; 

//* if.... si esto se cumple....haz "esto otro"

/*
if (condicional se cumple) {
    ejecuta esto
}
    */

if (true) {
    console.log('Dentro del if - true');
    
}

if (false) {
    console.log('Dentro del if - false'); //no ha lleado js debido a que es false
    
}

//? Operadores de comparación o condicionales

//* Mayor que ..... >

if (num1 > num2) {
    console.log('num1 es mayor que num2');
    
}
if (num2 > num1) {
    console.log('num1 es mayor que num2');
    
}

if (num2 >= num1) {
    console.log('num1 es mayor que num2');
    
}
if (num2 <= num1) {
    console.log('num1 es mayor que num2');
    
}
if (num2 == num1) {
    console.log('num1 es mayor que num2');
    
}
if (num2 != num1) {
    console.log('num1 es mayor que num2');
    
}

//! el == solo comprueba el valor, no el tipo de dato
//? el === comprueba también el tipo de dato

if (5 == '5') {
    console.log('son iguales');
    
}

if (5 === '5') {
    console.log('NO son iguales');
    
}

//*======================================*//

//* usamos boolen para saber que es true y false. use node en la consola y luego Boolean(whatever)

let isConnected1 = true; 
let isConnected2= 25; 

if (isConnected1 === true) {
    console.log("ahora si me esta dando un true")
} else {
    console.log("el argumento es false")
}

if (isConnected2 === true) {
    console.log("ahora si me esta dando un true")
} else {
    console.log("el argumento es false")
}

Boolean(0)


//? Scope de variables: 

function ejemploVarLet() {
    if (true) {
        var x = 10;
        let y = 20;
    }

    console.log(x); // Funciona porque `x` es global en la función
    // console.log(y); // Error: `y` no está definido
}

ejemploVarLet();


//! Si dentro de un bloque creamos una variable que se llame igual que una global, 
//! tiene preferencia la local.

let children = 0; 
const isPregnant = true; 

if (isPregnant) {
children++;
}

console.log(children);
