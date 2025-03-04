/*Ejercicio 6: Suma de Números del 1 al N
Enunciado:
Crea un programa que calcule la suma de todos los números del 1 hasta un número N, donde N es una variable que defines al inicio del programa. */
let N = 8;
let suma = 0;
let i = 1;
while(i <= N) {
    suma = suma + i;
    //También puede ser suma += i;
    i++;
}
console.log(suma);