/*Ejercicio 1: Suma Condicional de Números

Enunciado:
Crea una función llamada sumaCondicional que reciba un array de números y sume solo aquellos que sean mayores que 10 y múltiplos de 3.

Usa forEach() para recorrer el array.

Devuelve la suma final.*/

function sumaCondicional (numeros) {
    let suma = 0;
    let resultado = [];
    numeros.forEach((num) => {
        if (num > 10 && num % 3 === 0)
            suma += num;
            resultado += num + " + ";
    });
 return suma + " (" + resultado + ")";
};
console.log(sumaCondicional([5, 12, 18, 7, 21, 30]));