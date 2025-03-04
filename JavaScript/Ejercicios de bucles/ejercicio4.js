/* Ejercicio 4: Tabla de Multiplicar (Bucle Anidado for)

Enunciado:
Crea un programa que muestre la tabla de multiplicar del 1 al 10.

Usa bucles anidados: un bucle para el número base (1 al 10) y otro para los multiplicadores (1 al 10).*/
for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++){
        console.log(i , 'x' , j , '=' , i * j);
    }
}


/*
for (let i = 1; i <= 10; i++) { // Bucle para el número base (1 al 10)
    for (let j = 1; j <= 10; j++) { // Bucle para el multiplicador (1 al 10)
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); // Línea en blanco para separar tablas
}
*/