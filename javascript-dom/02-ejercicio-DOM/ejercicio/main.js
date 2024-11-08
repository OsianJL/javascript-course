//* AÑADIR UN H1 CON JS

const title = document.createElement('h1');
console.log(title);


title.className = 'title-01'
console.log(title.className);


title.innerHTML = "Ejercicio DOM-01"
console.log(title.innerHTML);


title.style.cssText=`
font-size: 20px;
color: red; 
background-color: gray
`
console.log(title.style.cssText)

const body = document.querySelector('body')
console.log(body);

body.append(title)

//* AÑADIR UN BOTÓN CON JS

const buttonJS = document.createElement('button')
console.log(buttonJS);

buttonJS.type = "submit";
buttonJS.className = "button-js";

console.log(buttonJS.type);
console.log(buttonJS.className);

buttonJS.innerHTML = "click here"
console.log(buttonJS.innerHTML);

buttonJS.style.cssText =`
padding: 1rem 3rem; 
background-color: blue;
cursor: pointer;
color: white
`

body.append(buttonJS)


buttonJS.setAttribute("data-id", "12345")
title.setAttribute("title", "soy un titulo")