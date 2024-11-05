//? Funciones en JavaScript

// bloques de codigo reutilizables


function saludar () {
    console.log('hola');
    
}

const otroSaludo = saludar //almacenar la referencia de la funcion dentro de otra función. 

saludar()
otroSaludo()


//*============================================
//*============================================
//* le añadimos dinamismo---- > parametros

function buenosDias  (nombre = 'amigo', apellido = 'jorge') {
    console.log(`buenos dias ${nombre} ${apellido}`);
    
}

buenosDias('osian')
buenosDias()


// spread operator: [1, 2, 3]  ----> 1 , 2, 3
// rest operator: 1, 2, 3 -----> [1, 2, 3] este es el caso de las funciones aqui ddebajo 

function sumarVariosNumeros (nombre, ...numeros) {
let total = 0; 
for (const num of numeros) {
    total += num
}
console.log(`hola ${nombre}, el resultado es ${total}`);

} 

sumarVariosNumeros('osian',2, 4, 6, 7)


//*===================================
//*===================================

function cuadrado (num) {
    console.log(num ** 2)
}

function exp (base, altura) {
    const resultado = base * altura;
    return resultado
    console.log('nada se ejecuta despues del return, se sale fuera')
}

result = exp(3,4)
console.log(exp(3,4))
console.log(result)

//! las funciones SIEMPRE retornan algo. si tu no lo defines, será por defecto undefined. 