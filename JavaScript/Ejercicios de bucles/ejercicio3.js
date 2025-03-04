//Variable predefinida
let edad = 2;

if (edad <= 0) {
    console.log("La edad ingresada no es válida.");
} else if (edad >= 1 && edad <= 12) {
    console.log("Eres un niño.");
} else if (edad >= 13 && edad <= 19) {
    console.log("Eres un adolescente.");
} else if (edad >= 20 && edad <= 64) {
    console.log("Eres un adulto.");
} else {
    console.log("Eres un adulto mayor.");
}


/**
Ejercicio 3: Clasificador de Edades
Enunciado:
Escribe un programa en JavaScript que:

Pida una edad (simulada usando una variable).

Si la edad ingresada es menor o igual a 0, el programa mostrará un mensaje indicando que la edad no es válida.

Si la edad es válida (mayor que 0), el programa debe clasificarla en una de estas categorías:

0 a 12 años: "Eres un niño."

13 a 19 años: "Eres un adolescente."

20 a 64 años: "Eres un adulto."

65 o más: "Eres un adulto mayor."
 */
