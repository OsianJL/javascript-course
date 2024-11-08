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


const img = document.querySelector('.foto-1')
console.log(img);
