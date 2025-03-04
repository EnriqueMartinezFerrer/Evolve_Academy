/*Ejercicio 1: Números Pares del 1 al 50 (Bucle for)
Enunciado:
Escribe un programa que imprima todos los números pares del 1 al 50.*/
for(let i = 1; i<=50; i++) {
    if(i%2 === 0) {
        console.log(`el número par es: ${i}`);
    }
}