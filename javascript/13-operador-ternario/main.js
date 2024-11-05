//? operador ternarioj


//* sustitucion de un if...else muy simple

const isMarried = false; 
if (isMarried) {
    console.log("yuhuuuuu")
} else {
    console.log('get a life')
}


//* con el ternario: 
isMarried 
    ? console.log('yuhooo') 
    : console.log('get a life')

//* caso 2: lo usamos en el lugar donde hay que poner un valor u otro dependiendo de una condicion---> donde pidan expresiones

//? cuando creas una variable. a la derecha del igual se espera una expresion

const edad = 25; 

let esMayorDeEdad; 
esMayorDeEdad = edad >= 18 ? true : false; 
console.log(esMayorDeEdad);

//? en el return de una funcion

function esPar (num) {
    if (num % 2 === 0){
        return 'es par'
    } else {
        return 'es impar'
    }
}

function esParCool (num) {
    return num % 2 === 0 ? 'es par': 'es impar'
}

console.log(esParCool(4));

