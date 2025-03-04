// Archivo ejercicio13.js
const texto = 'El sol brilla sobre el cielo azul y brillante';

// Convertir el texto en un array de palabras
const palabras = texto.split(' ');
console.log('Array de palabras:', palabras);

// Filtrar palabras con más de 5 letras
const palabrasFiltradas = palabras.filter(palabra => palabra.length > 5);
console.log('Palabras con más de 5 letras:', palabrasFiltradas);

// Ordenar palabras de forma descendente por longitud
const palabrasOrdenadas = [...palabrasFiltradas].sort((a, b) => b.length - a.length);
console.log('Palabras ordenadas por longitud:', palabrasOrdenadas);