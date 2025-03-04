/*Ejercicio 4: Contar Tipos de Datos en un Array

Enunciado:
Crea una función llamada contarTipos que reciba un array con diferentes tipos de datos (números, strings, booleanos, etc.) 
y devuelva un objeto que indique cuántos de cada tipo hay.*/
let datos = [1, "hola", true, 42, false, "mundo", null, undefined];
function contarTipos(datos){
    let objeto = {};
    datos.forEach(el => {
        let tipo = typeof el;
        objeto[tipo] = (objeto[tipo] || 0) + 1; 
 });
 return objeto;
}
console.log(contarTipos(datos));