// Archivo ejercicio12.js
const alumnos = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Ana', edad: 17 }
  ];
  
  function gestionarAlumnos(accion, datos) {
    switch (accion) {
      case 'añadir':
        alumnos.push(datos);
        console.log(alumnos);
        break;
      case 'actualizar':
        const alumnosAct = alumnos.map(alumno =>
          alumno.nombre === datos.nombre ? { ...alumno, ...datos } : alumno
        );
        console.log(alumnosAct);
        return alumnosAct;
      case 'contarMayores':
        const Mayores = alumnos.filter(alumno => alumno.edad > 18).length;
        console.log(Mayores);
        return Mayores;
      default:
        console.log('Acción no reconocida');
    }
  }
  
  // Ejemplo de uso
  gestionarAlumnos('añadir', { nombre: 'Pedro', edad: 22 });
  gestionarAlumnos('actualizar', { nombre: 'Ana', edad: 18 });
  gestionarAlumnos('contarMayores');