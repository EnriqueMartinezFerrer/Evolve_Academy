// Archivo ejercicio9.js
const libros = [
    { titulo: 'JavaScript Avanzado', autor: 'Juan Pérez', año: 2019 },
    { titulo: 'JavaScript Básico', autor: 'Carlos López', año: 2008 }
  ];
  libroFiltrado = libros.filter(el => el.año > 2010);
  firstLibro = libros.find(el => el.autor === 'Juan Pérez');
  ordenoLibro = libros.sort((a, b) => a.año - b.año);
  console.log(libroFiltrado);
  console.log(firstLibro);
  console.log(ordenoLibro);