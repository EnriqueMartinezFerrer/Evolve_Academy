// Ejercicio10.js 
const nums = [1, 2, 3, 4, 5];
const numsinv = [...nums].reverse();
const resultado = numsinv.map((num, index) => num * index);
console.log(resultado);
