//? Bucles parte II

//* for....of
//* SIEMPRE EMPIEZA EN EL PRIMER ELEMENTO
//* SIEMPRE TERMINA EN EL ULTIMO
//* SIEMPRE VA DE UNO EN UNO

const frutas = ["fresa", "platano", "manzana", "pera", "sandia"];
const frase = "me encanta js vanilla";

//* fruta = frutas[i]

for (const fruta of frutas) {
  console.log(fruta);
}

for (const letra of frase) {
  console.log(letra);
}

//* for....in
//* SIEMPRE EMPIEZA EN EL PRIMER ELEMENTO
//* SIEMPRE TERMINA EN EL ULTIMO
//* SIEMPRE VA DE UNO EN UNO

//? devuelve los indices

for (const index in frutas) {
  console.log(index, frutas[index]);
}

//?====================================

//* While. mientras se cumpla la condicion, no deja de dar vueltas

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// let password = prompt("dime la contraseña: ");

// while (password !== "1234") {
//   password = prompt("vuelve a intentarlo: ");
// }
// console.log("contraseña correcta");

//* ============================================
//* do....while
//* primero ejecuta el código dentro del bucle, y luego hace la primera consulta de la condicion

// let pass;
// do {
//   pass = prompt("dime la contraseña");
// } while (pass !== "1234");



//*========================================
//* EXTRA-! PODEMOS ROMPER EL BUCLE CON BREAK O CONTINUE

let numero = 0; 

while (true) {
    numero++


  if (numero % 2 === 0){
    continue
  }

  console.log(numero)


  if (numero === 11){
    break;
  }
}

console.log('osian')




