//? Bucles en js vanilla

//* estructuras de datos para: 

//* 1. repetir codigo un numero de veces

//* 2. recorrer elementos ITERABLES. (arrays, objetos, string...)

//* for...

for (let i = 1; i < 5; i += 2) {
console.log('hola')
}

for (let i = 1; i < 5; i += 1) {
console.log('hola')
}

for (let i = 1; i <= 5; i++) {
console.log('hola')
}

//* para recorrer cualquier iterable usaremos la variable que teiene numeros correlativos

const frutas = [
    2, 4, 6, 8
]

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}


const sentence = 'Me gusta js los lunes'

for (let i = 0; i < sentence.length; i++){
    console.log(sentence[i])
}


debugger
for (let i = sentence.length - 1; i >= 0; i--){
    console.log(sentence[i])
}


//*=========================================

//* examples: 

const nums = [2, 15, -13, 23, 75, 4, 12]

const pares = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        pares.push(nums[i])
    }
}

console.log(pares);

let paresCopy = [...pares]
console.log(paresCopy);

