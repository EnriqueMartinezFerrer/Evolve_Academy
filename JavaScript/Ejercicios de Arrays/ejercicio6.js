//Ejercicio 6
const estudiantes = [
    { nombre: 'Jorge', edad: 33, curso: 'Programación' },
    { nombre: 'Raquel', edad: 28, curso: 'Inglés' },
    { nombre: 'Marta', edad: 45, curso: 'Física' },
    { nombre: 'Manuel', edad: 20, curso: 'Cocina' },
    
  ];
  function mostrarEstudiantes(estudiantes){
    estudiantes.forEach(estudiante =>{
      console.log (`${estudiante.nombre} tiene ${estudiante.edad} años y está inscrito en el curso de ${estudiante.curso}`);
    })
  }
  
  mostrarEstudiantes(estudiantes);