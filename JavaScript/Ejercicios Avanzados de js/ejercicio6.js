// Archivo ejercicio6.js
const temperaturas = [22, 28, 18, 15, 32, 25];

// Encontrar la temperatura más alta y la más baja sin Math
let tempMax = temperaturas[0];
let tempMin = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
  if (temperaturas[i] > tempMax) {
    tempMax = temperaturas[i];
  }
  if (temperaturas[i] < tempMin) {
    tempMin = temperaturas[i];
  }
}

console.log(`Temperatura más alta: ${tempMax}`);
console.log(`Temperatura más baja: ${tempMin}`);

// Calcular la temperatura media
let suma = 0;
for (let i = 0; i < temperaturas.length; i++) {
  suma += temperaturas[i];
}
const media = suma / temperaturas.length;
console.log(`Temperatura media: ${media}`);

// Filtrar temperaturas por encima de la media
const tempArribaMedia = temperaturas.filter(el => el > media);
console.log('Temperaturas por encima de la media:', tempArribaMedia);

// Convertir temperaturas de Celsius a Fahrenheit
const temperaturasFahrenheit = temperaturas.map(temp => (temp * 9/5) + 32);
console.log('Temperaturas en Fahrenheit:', temperaturasFahrenheit);
