//? Cazar elementos del DOM

//* Cazamos usando el id de un elemento -----> getElementById()

const h1 = document.getElementById('supertitulo');

console.log(h1.nodeType)


//* Cazamos usando CUALQUIER SELECTOR CSS ----> querySelector()

const elMismoH1 = document.querySelector('#supertitulo');
console.log(h1);


const ultimoLiLista2 = document.querySelector('.lista-2 li:last-child');
console.log(ultimoLiLista2);


//* Tambien podemos cazar varios elementos usando querySelectorAll

const todosLosLiDeLaWeb = document.querySelectorAll('li')
console.log(todosLosLiDeLaWeb);


//*==============================================

//? Que puedo hacer con los elementos que cace? 

//? Propiedades básicas que podemos ver/modificar

//* ID

console.log(h1.id);

h1.id = 'tituloOsian'

console.log(h1.id);

//* Name
const myInputName = document.querySelector('[type="text"]')
console.log(myInputName.name);

myInputName.name = "myName"; 

console.log(myInputName.name);

//* src

const myImage = document.querySelector('img');
console.log(myImage.src);

myImage.src = "https://picsum.photos/id/12/200/200"
myImage.alt = 'paisaje rocoso en la playa'

console.log(myImage);

//* sus clases
//* className ------> el string de todas las clases

console.log(myImage.className);
myImage.className = 'bg-red'
console.log(myImage.className);

//* classList --->>> tiene una seria de metodos para añadir, quitar, reemplazar clases

//para añadir clases -----> .add

myImage.classList.add('rounded', 'red-500')

//para quitar clases -----> .remove

myImage.classList.remove('rounded')

//para reemplazar clases -----> .replace

myImage.classList.replace('red-500', 'red-100')
console.log(myImage.className);


//para saber si tiene una clase concreta -----> .contains

console.log(myImage.classList.contains('red-500'));
console.log(myImage.classList.contains('red-100'));

//para quitar o poner una clase dependiendo de si la tiene puesta o no
//! importante para quitar y poner con botones
myImage.classList.toggle('show')
console.log(myImage.className);
myImage.classList.toggle('show')
console.log(myImage.className);


//* ==============================

//* Contenido de dentro

//* innerText
console.log(h1.innerText)
// h1.innerText = "texto cambiado desde js"

//*innerHTML (cuando necesitamos trrabajar con html dentro)
console.log(h1.innerHTML);
h1.innerHTML = "texto cambiado desde js <u>con innerHTML</u>"
console.log(h1.innerHTML);



const lista1 = document.querySelector('.lista-1')
console.log(lista1);

// con esto vaciamos el ul, ya no hay lis dentro
lista1.innerHTML = ''

console.log(lista1);

const valorDeVariable = "soy la hostia y me he metido aqui"

lista1.innerHTML = `
<li>${valorDeVariable}</li>
<li>desde javascrip</li>
<li>desde javascrip</li>
<li>desde javascrip</li>
<li>desde javascrip</li>`


//* Para cualquier atributo ------> getAttribute() y setAttribute()


console.log(myImage.getAttribute('class'))
console.log(myImage.getAttribute('title'))
console.log(myImage.getAttribute('src'))

myImage.setAttribute('title', 'soy una foto')
console.log(myImage.getAttribute('title'))

//* ================================
//* 
//* los estilos CSS

h1.style.backgroundColor = 'pink';


const padding = 2 * 1.5; 
h1.style.padding = `${padding}rem`

//! solo es recomendable si hay calculos. Si no, lo que debes hacer es crear una clase en CSS, y cambias la clase con js

//* tambien puedo añadir varios estilos a la vez usando cssText

// myImage.style.borderRadius = '15px'
// myImage.style.border = '4px solid black'
// myImage.style.boxShadow = '0 0 20px 5px'

myImage.style.cssText = `
border-radius: 15px; 
border: 10px solid black
`


//*======================================
//*======================================

//? Crear elemntos en el DOM

//* Paso 1: CRear el nuevo elemento en Memoria: createElement()

const ulLista3 = document.createElement('ul')
console.log(ulLista3);

//* Paso 2: Dale todos los atributos que quieres que tenga: 

ulLista3.className = 'font-semibold tex-xl text-black'
console.log(ulLista3);

//* Paso 3: añadele todo el contenido que quieras: 

const itemsLista = ['item1', 'item2', 'item3', 'item4']

// ulLista3.innerHTML = `
// <ul>item1</ul>
// <ul>item2</ul>
// <ul>item3</ul>
// `

for (const item of itemsLista){
    ulLista3.innerHTML += `<li>${item}</li>`
}

//* Paso 4: Añade los estilos que sean necesarios: 

ulLista3.style.cssText = `
border-radius: 15px; 
border: 10px solid black
`

//* Paso 5: Ponlo en el DOM DONDE QUIERAS


//siempre necesitaremos otro elemento del DOM como referencia

const sectionListaJS = document.querySelector('.lista-js')
console.log(sectionListaJS);


//para meter DENTRO  y en la ultima posicion (ultimo hijo) ---> append()

sectionListaJS.append(ulLista3)

//para meter DENTRO  y en la primera posicion (primer hijo) ---> prepend()

sectionListaJS.prepend(ulLista3)

//para meter FUERA  y despues  ---> after()

sectionListaJS.after(ulLista3)

//para meter FUERA  y antes  ---> before()

sectionListaJS.before(ulLista3)


//* la otra forma de añadir elementos como contenido aseria volver a crearlos

const nuevoItem = document.createElement('li');
nuevoItem.innerHTML = 'Item5 creado aparte'

ulLista3.append(nuevoItem)