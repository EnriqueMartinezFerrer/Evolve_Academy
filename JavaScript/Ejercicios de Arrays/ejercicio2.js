/*Ejercicio 2: Invertir Claves y Valores de un Objeto

Enunciado:
Crea una función llamada invertirObjeto que reciba un objeto y devuelva uno nuevo donde las claves sean los valores y los valores sean las claves.

Usa Object.keys() y un bucle for...in para recorrer el objeto.*/
// Definir el objeto de prueba
let objeto = { a: "uno", b: "dos", c: "tres" };

// Función para invertir claves y valores
const invertirObjeto = (objeto) => {
    let objetoNuevo = {}; // Inicializar un nuevo objeto vacío

    for (let clave in objeto) {
        let valor = objeto[clave]; // Obtener el valor de la clave actual
        objetoNuevo[valor] = clave; // Invertir clave y valor
    }

    return objetoNuevo; // Retornar el nuevo objeto invertido
};

// Imprimir resultado en consola
console.log(invertirObjeto(objeto));
