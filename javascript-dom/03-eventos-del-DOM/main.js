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
