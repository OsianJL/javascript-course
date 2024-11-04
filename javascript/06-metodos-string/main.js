//? metodos de los string

const frase = 'Con diez canoas por banda....'


//* .length ----> longitud del texto

console.log(frase.length)

//* .toUpperCase() y .toLowerCase()

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

//* .trim() ---> para quitar espacios en blannco delante y detras

const word = '  nota   ';
console.log(word.trim())

//* .indexOf('substring') --> te devuelve el indice del trozo de texte que le has pasado, no lo encuentra devuelve -1

console.log(frase.indexOf('canoas'));
console.log(frase.indexOf('perra'));


console.log(frase.lastIndexOf('n'));


//* .includes('substring') --> true o falso si se encuentra o no  el trozo de texto que le has pasado

console.log(frase.includes('con'))
console.log(frase.includes('band'))

//* .slice(inicio corte, final corte) --> te devuelve un pedazo del texto, sin modificar el original

trozo = frase.slice(4)
console.log(trozo);

trozo = frase.slice(4, 10)
console.log(trozo);

trozo = frase.slice(4, -5) //* negativo cuenta desde atras
console.log(trozo);

//* .split('separador') --> genera un nuevo array a partir del texto dado y separa el texto segurn el separador que le hemos pasado

console.log(frase.split(' '))
