const foto1 = document.querySelector('.foto-1')
console.log(foto1);

foto1.addEventListener('click', (event)=>{

console.log(event.offsetX)
console.log(event.offsetY)

})

foto1.addEventListener('mousemove', (event)=>{

    const x = event.offsetX;
    const y = event.offsetY
console.log(event.offsetX, event.offsetY)

foto1.style.boxShadow = `${x / 3 }px ${y / 3 }px 10px 0px crimson`

})

const inputOne = document.querySelector('.input-1')
console.log(inputOne);

inputOne.addEventListener('keypress', (event) => {
    console.log(event);
    
    if (event.key === 'q'){
        console.log('has apretado Ctrl + Q');
        
    }
   
    if (event.key === 'Enter'){
        console.log('has apretado Enter');
        
    }
    // console.log(event.key)
    // console.log(event.target.value)
})

//! si no utilizamos una funcion anonima y en su lugar queremos pasarle una
//!referencia a una funcion, de igual modo tenemos como primer parametro el objeto event

function handleClick (e) {
    console.log('has hecho click')
}

foto1.addEventListener('dblclick', handleClick)
 