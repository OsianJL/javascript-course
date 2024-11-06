const nombre = 'Osian',
edad = 37,
isMarried = true;

const frutas = ['fresa', 'manzana', 'pera', 'sandia']


const platano = {
    cantidad: 3,
    procedencia: 'Canarias',
    tieneMotitas:true
}

//! los objetos y arrays hay que transformalos con JSON.stringify() y JSON.parse() para convertir

console.log(nombre.toString())
console.log(edad.toString())
console.log(isMarried.toString())
console.log(frutas.toString())
console.log(platano.toString())


const frutasToJSON = JSON.stringify(frutas)
console.log(frutasToJSON);

const platanoToJSON = JSON.stringify(platano)
console.log(platanoToJSON);

const platanoToJSformat = JSON.parse(platanoToJSON)
console.log(platanoToJSformat.cantidad);


