// Ejercicio7.js 
const numbers = [2, 4, 5, 6, 7, 8, 9, 11, 13];

const newArray = numbers.filter(el => {
    let count = 0;

    for (let i = 1; i <= el; i++) {
        if (el % i === 0) {
            count++;
        }
    }

    return count === 2;
});

console.log(newArray); 

