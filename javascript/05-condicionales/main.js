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

