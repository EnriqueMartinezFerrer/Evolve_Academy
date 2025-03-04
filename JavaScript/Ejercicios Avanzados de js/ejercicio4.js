// Archivo ejercicio4.js
const tareas = [
    { tarea: 'Comprar leche', completada: false },
    { tarea: 'Estudiar JavaScript', completada: true }
  ];
  
  function gestionarTareas(accion, datos) {
    switch (accion) {
      case 'agregar':
        tareas.push({ tarea: datos.tarea, completada: false });
        break; 
      case 'completar':
        const tareaEncontrada = tareas.find(t => t.tarea === datos.tarea);
        if (tareaEncontrada) {
          tareaEncontrada.completada = true;
        }
        break;
      case 'filtrar':
        return tareas.filter(t => t.completada === datos.estado);
      case 'contarPendientes':
        return tareas.filter(t => !t.completada).length;
      case 'mostrar':
        console.log(tareas);
        break;
      default:
        console.log('Acción no reconocida');
    }
  }
  
  // Ejemplo de uso
  gestionarTareas('mostrar');
  gestionarTareas('agregar', { tarea: 'Hacer ejercicio' });
  gestionarTareas('completar', { tarea: 'Comprar leche' });
  console.log('Tareas completadas:', gestionarTareas('filtrar', { estado: true }));
  console.log('Tareas pendientes:', gestionarTareas('contarPendientes'));
  gestionarTareas('mostrar');
  