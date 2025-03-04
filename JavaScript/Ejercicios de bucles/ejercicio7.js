/*Ejercicio 7: Números Divisibles por 3 (hasta 30)
Enunciado:
Escribe un programa que muestre en la consola todos los números del 1 al 30 que sean divisibles por 3.*/
for(let i = 1; i <= 30; i++) {
    if(i%3 === 0) {
        console.log(`Los divisibles entre 3 son: ${i}`);
    }
}