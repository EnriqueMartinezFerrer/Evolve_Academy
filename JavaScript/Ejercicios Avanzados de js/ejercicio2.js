// Archivo ejercicio2.js
const estudiantes = [
    { nombre: 'Juan', nota: 8 },
    { nombre: 'Ana', nota: 5 },
    { nombre: 'Carlos', nota: 7 }
  ];
estudiantesFiltrar = estudiantes.filter(el => el.nota >= 6);
notaMedia = estudiantes
let suma = 0;
for(let i = 0; i < estudiantes.length; i++){
    suma += estudiantes[i].nota
}
const ordenar = estudiantes.sort((a, b) => b.nota - a.nota);
console.log(ordenar);
const media = suma / estudiantes.length;
console.log(estudiantesFiltrar); 
console.log(media);
