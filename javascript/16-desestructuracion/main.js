//? Desestructuración

const frutas = ["fresa", "manzana", "pera", "sandia"];

const fresa = frutas[0];
const manzana = frutas[1];

//* Desestructuracion

const [strawberry, apple, pear, watermelon] = frutas;

console.log(`la primera fruta es la ${frutas[0]}, la segunda es ${frutas[1]}`);

console.log(`la primera fruta es la ${fresa}, la segunda es ${manzana}`);

console.log(`la primera fruta es la ${strawberry}, la segunda es ${apple}`);

//! normas
//! no importa el nombre de la variable, importa el ORDEN

const [uno, dos, , tres] = frutas;

console.log(`la primera fruta es la ${uno}, la segunda es ${dos} y ${tres}`);

function operacionesArray(num1, num2) {
  const suma = num1 + num2;
  const resta = num1 - num2;
  const multy = num1 * num2;
  const divy = num1 / num2;
  const poten = num1 ** num2;

  return [suma, resta, multy, divy, poten];
}

const [, , multy4por6] = operacionesArray(4, 6);
console.log(multy4por6);

const [, , multy2por3] = operacionesArray(2, 3);
console.log(multy2por3);

//*========================================
//*========================================

//* lo mismo que con los arrays pero normas inversas

const pepino = {
  cantidad: 3,
  procedencia: "Marruecos",
  tieneMotitas: true,
  emoticono: "🥒",
};

//! problemas

// const cantidad = pepino.cantidad
// const procedencia = pepino.procedencia
// const emoticono = pepino.emoticono

console.log(`El ${pepino.emoticono}
     viene de ${pepino.procedencia}
     y me quedan ${pepino.cantidad}`);

//  console.log(`El ${emoticono}
//  viene de ${procedencia}
//  y me quedan ${cantidad}`);

//*Solucion

//! En el caso de los objetos el ORDEN NO IMPORTA
//! IMPORTA EL NOMBRE DE LAS KEYS SEAN IGUALES A LAS VARIABLES
//! EL PROBLEMA ES QUE SOLO LO PUEDO HACER UNA VEZ, PERO SE LE PUEDE PONER ALIAS A LAS VARIABLES

const { cantidad, emoticono, procedencia } = pepino;

console.log(`El ${emoticono}
     viene de ${procedencia}
     y me quedan ${cantidad}`);

//* ALIAS

const { cantidad: cant, emoticono: emo, procedencia: proce } = pepino;

//? caso practico con objetos.

function operacionesObjeto(num1, num2) {
  const suma = num1 + num2;
  const resta = num1 - num2;
  const multy = num1 * num2;
  const divy = num1 / num2;
  const poten = num1 ** num2;

  return { suma, resta, multy, divy, poten };
}

const { multy: multy4y6 } = operacionesObjeto(4, 6);
console.log(multy4y6);

const { multy: multy6y6 } = operacionesObjeto(6, 6);
console.log(multy6y6);

const { multy: multy8y6 } = operacionesObjeto(8, 6);
console.log(multy8y6);

//* EXTRA
//* TAMBIEN PODEMOS DESESTRUCTURAR DIRECTAMENTE EN EL PARAMETRO DE UNA FUNCION

function showUserInfo({name, lastName, email, isAdmin}) {

    // const {name, lastName, email, isAdmin} = user
  
    console.log(
 `INFO DEL USUARIO: 
            Nombre: ${name}
            Apellidos: ${lastName}
            Email: ${email}
            Admin: ${isAdmin ? "😊" : "😭"}`
  );
}


const user1 = {
  name: "osian",
  lastName: "jorge",
  email: "osian@msn.com",
  isAdmin: true,
};


showUserInfo(user1)