// Ejercicio1.js 
const numbers = [3, 7, 12, 5, 9, 20, 15];
const mayores = numbers.map(el => el*2);
const filtrado = mayores.filter(el => el >= 20 && el%2 === 0)
console.log(filtrado);