export function convertirMinusculas(texto) {
    return texto.toLowerCase();
}
export function convertirMayusculas(texto) {
    return texto.toUpperCase();
}
//* colocar los exports delante de la funcion es lo mismo que exportar abajo de forma nombrada


export default function revertirTexto(texto) {
    return texto.reverse();
}
//* si usamos export default delante de la funcion es lo mismo que exportar abajo por defecto


// export default revertirTexto
export { convertirMinusculas, convertirMayusculas}