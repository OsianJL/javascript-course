//? Funciones Parte II

//* funciones anonimas
//* guardarles en constantes como funcion anonima para qu no permita reasignar valor de la misma

const sumar = function (a, b) { return a + b}


//*==========================================
//*==========================================
//* Arrow functions (siempre son anonimas. las guardamos en la constante, pero la funcion es anonima)

const multiply = (a, b) => {return a * b}

//* arrow caracteristicas: 

const goodMorning1 = nombre => {return console.log(`hi ${nombre}. good morning`)}
const goodMorning2 = _ => console.log(`h. good morning`)

//* la funcion flecha tiene un return implicito. asi que puedes quitar el return: 

const sum = (c, d) => a + b; 