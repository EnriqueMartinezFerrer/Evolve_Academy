// Archivo ejercicio7.js
const contactos1 = ['Juan', 'Carlos', 'Ana'];
const contactos2 = ['Ana', 'Pedro', 'Luis'];

// Combinar listas sin duplicados usando Set y spread
const contactosCombinados = [...new Set([...contactos1, ...contactos2])];

// Ordenar alfabéticamente
const contactosOrdenados = contactosCombinados.sort();

console.log(contactosOrdenados);
