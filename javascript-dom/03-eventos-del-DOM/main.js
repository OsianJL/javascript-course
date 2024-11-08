const newTitleH1 = document.createElement('h1')
newTitleH1.innerHTML = 'Eventos del DOM'
document.body.prepend(newTitleH1)


const newBtn = document.createElement('button')
newBtn.innerHTML = 'click here'
newBtn.style.cssText = `
border-radius: 15px;
background-color: orange; 
color: white; 
border: 1px solid black; 
cursor: pointer;
padding: 1rem 2rem;
`

document.body.append(newBtn)


//* EVENTOS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//cazamos el elemento (objeto del DOM)

const img = document.querySelector('.foto-1')
console.log(img);
const h1 = document.querySelector('h1')
console.log(h1);

//escuchamos el evento que queramos
function handleImageClick () {
    console.log('has hedcho click en la imagen para cambiar el color de h1')
   
    h1.classList.add('colorOnClick')
}


//* version 1. creamos la funcion fuera y se la pasamos al eventListener

img.addEventListener('click', handleImageClick )



//* version 2. creamos una funcion anonima directamente dentro como parámetro

img.addEventListener('click', function () {h1.classList.add('textSizeOnClick')} )


//* version 3. creamos una funcion anonima directamente dentro como parámetro con arrow function

newBtn.addEventListener('click', () => h1.classList.add('borderOnClick'))

//*version 4. pasarle parámetros a la funcion que le estamos pasando al eventListener

function handleImageClickWithParam (nombre) {
    console.log(`${nombre} has hecho click en la imagen para que el h1 diga tu nombre`); 
   
    h1.innerHTML = nombre; 
}

img.addEventListener('click', function () {handleImageClickWithParam('osian')} )

img.addEventListener('click', () => {handleImageClickWithParam('osian')} )

img.addEventListener('click', () => handleImageClickWithParam('osian') )



//*==============================================
//*==============================================
//*Ejemplos de Eventos

const btn1 = document.querySelector('.btn-1')
console.log(btn1);

const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const btn4 = document.querySelector('.btn-4')
const btn5 = document.querySelector('.btn-5')
const inputChange = document.querySelector('[placeholder="change"]')
const inputKeyPress = document.querySelector('[placeholder="keypress"]')
const inputRange = document.querySelector('[type="range"]')
console.log(inputChange)
console.log(inputKeyPress)
console.log(inputRange)

//* Click

btn1.addEventListener('click', () => {
   console.log('CLICK')
})

//* dblClick

btn2.addEventListener('dblclick', () => {
   console.log('DOUBLE CLICK')
})

//* mouseover

// btn3.addEventListener('mouseover', () => {
//    console.log('HAS ENTRADO EN EL BTN')
// })

//* mouseenter // tiene algunas diferencias, ya que no activa a sus hijos, como mouseover

btn3.addEventListener('mouseenter', () => {
   console.log('HAS ENTRADO EN EL BTN')
})

//* mouseleave

btn4.addEventListener('mouseleave', () => {
   console.log('HAS SALIDO DEL BTN')
})

//* mousemove

btn5.addEventListener('mousemove', () => {
   console.log('te estas moviendo por el boton')
})

//? Eventos de teclado

// cuando has modificado el input Y SALES DEL INPUT
inputChange.addEventListener('change', ()=> {
    console.log('Has modificado el input');
    
})

inputKeyPress.addEventListener('keypress', ()=> {
    console.log('Has apretado una tecla cualquiera');
    
})


//* scroll

const parrafo = document.querySelector('.scroll')

parrafo.addEventListener('scroll', ()=> {
    console.log('SCROLL');
    console.log(parrafo.scrollTop);
    if (parrafo.scrollTop > 50) parrafo.style.borderColor = 'red'; 
    
})



//* transitionend 

const btnTransition = document.querySelector('.transicion')
console.log(btnTransition);
btnTransition.addEventListener('transitionend', ()=>{
    console.log('END')
})



//* animationend

const cajaAnimacion = document.querySelector('.animacion')
console.log(cajaAnimacion);
cajaAnimacion.addEventListener('animationend', ()=> {
    btnTransition.style.backgroundColor = 'black';
})


const deleteBoxBtn = document.querySelector('.delete-box')
deleteBoxBtn.addEventListener('click', () => {
    console.log('funciona')
    cajaAnimacion.classList.add('out')
    cajaAnimacion.addEventListener('animationend', () => cajaAnimacion.remove())
})


//*=============================================
//*=============================================

//? Otras maneras de escuchar un evento

//* Usando las propiendades on...

const foto2 = document.querySelector('.foto-2')
console.log(foto2);
foto2.addEventListener('dblclick', () => console.log('test1')) // se ejecuta
foto2.addEventListener('dblclick', () => console.log('test2')) // se ejecuta tb



foto2.onmouseenter = () => console.log('has entradodkne una vez ') // esta no se ejecuta
foto2.onclick = () => console.log('has entradodkne otra vez ') 

//!differncias

//! Usando addEventListner PUEDES AÑADIR VARIAS VECES EL MISMO EVENTO AL MISMO ELEMENTO

//! hay un tercer parametro que no puedes usar con los on...

//* usando los atributos html on...

function handleFotoClick() {
    console.log("funciono");
    document.body.style.backgroundColor = "lightpink";
}


//*======================================
//*======================================
//*COMO LIMPIAR LOS LISTENERS
//! se utiliza el $ para indicar variables que contienen elementos del DOM
const $foto3 = document.querySelector('.foto-3')
const $foto4 = document.querySelector('.foto-4')

const $removeEventBtn = document.querySelector('.remove-event')

console.log($foto3, $removeEventBtn);

$foto3.onmousemove = (event) => console.log('Primera imagen',event.offsetX, event.offsetY);

function handleImageMove (event) {

    console.log('Segunda imagen',event.offsetX, event.offsetY);
}


$foto4.addEventListener('mousemove',handleImageMove);

//! MUY IMPORTANTEEEEEEEEE
//! QUITAR EVENTOS

$removeEventBtn.onclick = () => {
    $foto3.onmousemove = null; 

    $foto4.removeEventListener('mousemove', handleImageMove)
}