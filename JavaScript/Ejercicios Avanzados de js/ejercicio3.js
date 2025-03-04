// Archivo ejercicio3.js
const transacciones = [200, -50, -100, 350, -20];
let suma = 0;
for(let i = 0; i < transacciones.length; i++){
    suma += transacciones[i]
}
transaccionesFiltro = transacciones.filter(el => el > 100);
const transaccionesInvertidas = [];

for (let i = transacciones.length - 1; i >= 0; i--) {
  transaccionesInvertidas.push(transacciones[i]);
}
console.log(suma); 
console.log(transaccionesFiltro);
console.log(transaccionesInvertidas);