const calcularEstadisticas = (numeros) => {
    let suma = 0;
    let max = numeros[0];
    let min = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];

        if (numeros[i] > max) {
            max = numeros[i];
        }

        if (numeros[i] < min) {
            min = numeros[i];
        }
    }

    let promedio = suma / numeros.length;
    return { suma, promedio, max, min };
};

console.log(calcularEstadisticas([4, 8, 15, 16, 23, 42]));

