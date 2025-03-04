// Variables globales
let numero1;
let numero2;
let operacion;

// Obtener referencias a los elementos
const inputs = document.querySelectorAll('.input-field');
const buttons = document.querySelectorAll('.btn');

// Añadir un único event listener para todos los botones de operación
document.querySelector('.buttons-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn') && e.target.id !== "borrar") {
        numero1 = parseFloat(inputs[0].value);
        numero2 = parseFloat(inputs[1].value);
        operacion = e.target.id;

        /*if (isNaN(numero1) || isNaN(numero2)) {
            console.log("Introduce un número");
            return;
        }*/

        let resultado;
        switch (operacion) {
            case 'sumar':
                resultado = numero1 + numero2;
                console.log(`El resultado de ${numero1} + ${numero2} = ${resultado}`);
                break;
            case 'restar':
                resultado = numero1 - numero2;
                console.log(`El resultado de ${numero1} - ${numero2} = ${resultado}`);
                break;
            case 'multiplicar':
                resultado = numero1 * numero2;
                console.log(`El resultado de ${numero1} × ${numero2} = ${resultado}`);
                break;
            case 'dividir':
                if (numero2 === 0) {
                    console.log("No se puede dividir por 0.");
                } else {
                    resultado = numero1 / numero2;
                    console.log(`El resultado de ${numero1} ÷ ${numero2} = ${resultado}`);
                }
                break;
        }
    }
});

// Botón AC (Limpiar todo)
document.getElementById('borrar').addEventListener('click', () => {
    inputs[0].value = "";
    inputs[1].value = "";
    console.clear();
});


// A PARTIR DE ESTA LINEA DE CÓDIGO CADA VARIABLE TIENE SU VALOR:
// - numero1: contiene el primer número introducido en el formulario
// - numero2: contiene el segundo número introducido en el formulario
// - operacion: contiene el tipo de operación ('sumar', 'restar', 'multiplicar' o 'dividir')
//
// EJERCICIO: Crear una calculadora que:
// 1. Use estas variables para obtener los números y la operación
// 2. Realice el cálculo correspondiente según el botón pulsado
// 3. Muestre el resultado por consola usando console.log()
// 
// Por ejemplo, si numero1 = 5, numero2 = 3 y operacion = 'sumar'
// deberá mostrar por consola: "El resultado de 5 + 3 = 8" 