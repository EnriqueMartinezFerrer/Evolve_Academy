// Archivo ejercicio5.js
const nombres = ['Ana', 'Juan', 'Pedro', 'Andrés'];
nombresMay = nombres.map(el => el.toUpperCase());
nombresFiltro = nombres.filter(el => el[0] === 'A');
const nombresOrdenados = nombres.sort();
console.log(nombresFiltro);