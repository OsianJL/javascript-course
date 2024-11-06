//? Objetos en Javascript

//* VAlores no primitivos que guardan valores , pero SIEMPRE DE LA MISMA ENTIDAD: 

const userOne = {
    userName : 'Osian',
    userAge: 43,
    isMarried: false,
    friends: ['raul', 'fabi', 'David', {userName: 'Adri', isAdmin: true}],
    features: {
        eyeColor: 'blue',
        hairColor: 'black',
        conect: function () {console.log('conected');
        }
    },
    //metodo: es elnombre que las dfunciones reciben al estar dentro de un objeto
    sayHi: function () {console.log('hey guys')},
}

userOne.sayHi()

userOne.features.conect()

console.log(userOne.friends[1]);

console.log(userOne.friends[3].isAdmin);

console.log((userOne.shoe));




//! usar el operador ? para cuando tengamos propiedads que pueden dar null o undefined: 
//! optional chaining----> ? 

const perro =  {
    nombre: 'Kira',
    cachorros: ['Fluffy', 'Bongo']
}

const perro2 = {
    nombre: 'Freya',
    caracteristicas: {
        pelo: 'largo',
        ojos: 'miel'
    }
}

console.log(perro.nombre)
console.log(perro2.nombre)

console.log(perro.cachorros?.[1])
console.log(perro2.cachorros?.[1])


console.log(perro.caracteristicas?.pelo)
console.log(perro2.caracteristicas?.pelo)
//evitas el crash de js y que la app pueda seguir funcionando

//*==========================================
//*==========================================

//* asi creamos propiedads dentro del objeto: mutamos el objeto original

userOne.shoe = 'nike'

console.log(userOne.shoe)

userOne.userAge = 50;

console.log(userOne.userAge)

//* otra forma de llamar a las propiedades, en lugar del punto, con CORCHETES

const platano = {
    cantidad : 7,
    procedencia : 'Canarias',
    tieneMotitas : true,
    'donde-comprar': 'Lidl'
}

console.log(platano.tieneMotitas);

console.log(platano['tieneMotitas']);
console.log(platano['donde-comprar']);
// console.log(platano[donde-comprar]); esto dara error. necesitas las comillas


//* Propiedades computadas, que son propiedades que generamos o conseguimos a raiz del string guardado en una variable: 

const valorDeUnSelect = 'ciudad'
const valorDeUnInput = 'laspalmas'

const user1 = {
    email: "osianj@gmail.com",
    pass: "1234",
    [valorDeUnSelect]: valorDeUnInput
}
console.log(user1);


//* Solo podemos recorrer objetos con el for....in

for (const key in platano){
    console.log(key); //obtengo las keys

    console.log(platano[key]) //obtengo los valores:
}


//* EXTRA. Cuando un objeto tiene como nombre de propiedad el mimso nombre que la variable
//* que uses para añadirle un valor, te permite quitar uno de los dos nombres

const miNombre = 'osian'
const miEdad = 42

const nombre = 'juan'
const edad = 89

const usuario = {
    nombre: miNombre,
    edad: miEdad
}

//! esta sintaxis significa que hay esta escrito nombre: nombre, edad: edad. IMPORTANTE
const usuario2 = {
    nombre,
    edad,
}

console.log(usuario);
console.log(usuario2);
