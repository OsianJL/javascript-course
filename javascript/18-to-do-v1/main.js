import { leerTareas, crearTarea, borrarTarea, actualizarTarea, completarDescompletarTarea  } from "./funtions/todoFunctions.js";


const tareas = [
    {
        id:1,
        tarea: 'estudiar JS',
        isCompleted: true
    },
    {
        id:2,
        tarea: 'pasear a las perras',
        isCompleted: false
    },

];

let selection; 

do {
    selection = prompt(`
        ¡Bienvenido a tu lista de tareas 1.0!
        Que quieres hacer?
        (C) Crear una nueva tarea
        (R) Leer tus tareas
        (U) Actualizar una tarea
        (D) Borrar una tarea
        (E) Completar/Descompletar tarea
        (X) Salir
        `)


if (selection === 'r') {
    leerTareas(tareas);
} else if (selection === 'c') {
    crearTarea(tareas);
} else if (selection === 'u') {
    actualizarTarea(tareas);
} else if (selection === 'd') {
    borrarTarea(tareas);
} else if (selection === 'e') {
    completarDescompletarTarea(tareas);
} else if (selection === 'x' || selection === null) {
    console.log('adios');
    break;
}

} while (true)