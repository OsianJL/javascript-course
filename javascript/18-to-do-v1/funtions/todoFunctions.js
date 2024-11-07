function leerTareas(tareas) {
  for (let i = 0; i < tareas.length; i++) {
    console.log(
      `${tareas[i].isCompleted ? "✅" : "❌"} ${tareas[i].id}:${
        tareas[i].tarea
      }`
    );
  }
}

function crearTarea(tareas) {
  const nuevaTareaEnunciado = prompt("Introduce la nueva tarea:");
  let nuevaTarea = {
    id: tareas.length + 1,
    tarea: nuevaTareaEnunciado,
    isCompleted: false,
  };

  tareas.push(nuevaTarea);
  console.log(`la tarea "${nuevaTareaEnunciado}" ha sido añadida`);
}

function borrarTarea(tareas) {
  const idTareaParaBorrar = parseInt(
    prompt("dime el id de la tarea quieres borrar:")
  );
  if (isNaN(idTareaParaBorrar)) {
    console.log("ID no válido, intenta otro");
    return;
  }
  let index = -1;
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id === idTareaParaBorrar) {
      index = i;
    }

    if (index !== -1) {
      tareas.splice(index, 1);
      console.log(`la tarea se ha borrado correctamente`);
    } else {
      console.log("No hay ninguna tarea con ese ID");
    }
  }
}

function actualizarTarea(tareas) {
  let tareaParaActualizarID = parseInt(
    prompt("dime el ID de la tarea a actualizar: ")
  );
  let tareaNuevaEnunciado = prompt("dime la nueva tarea: ");

  if (isNaN(tareaParaActualizarID)) {
    console.log("ID no válido, intenta otro");
    return;
  }
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id === tareaParaActualizarID) {
      tareas[i].tarea = tareaNuevaEnunciado;
      console.log(
        `la tarea numero ${tareaParaActualizarID} se ha actualizado correctamente`
      );
    } else {
      console.log("ese id no corresponde a ninguna tarea");
    }
  }
}

function completarDescompletarTarea(tareas) {
  let tareaCompletarDescompletarID = parseInt(
    prompt("dime el ID de la tarea para cambiar su estado: ")
  );

  if (isNaN(tareaCompletarDescompletarID)) {
    console.log("ID no válido, intenta otro");
    return;
  }
  if (tareaCompletarDescompletarID > tareas.length -1){
    console.log("ese id no corresponde a ninguna tarea")
  }  
  
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id === tareaCompletarDescompletarID) {
      if (tareas[i].isCompleted === true) {
        tareas[i].isCompleted = false;
      } else {
        tareas[i].isCompleted = true;
      }
      console.log(
        `la tarea numero ${tareaCompletarDescompletarID} ha cambiado su estado`
      );
    } 
    }
  }


export {
  leerTareas,
  crearTarea,
  borrarTarea,
  actualizarTarea,
  completarDescompletarTarea,
};
