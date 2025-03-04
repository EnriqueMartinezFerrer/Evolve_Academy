//Ejercicio 10
  
const contarCaracteres = (palabra) => {
    let contador = {};

    for(let el in palabra){
       if (contador [palabra[el]]){
            contador[palabra[el]] +=1;
        }else{
            contador[palabra[el]] = 1;
        }
    }
    return contador;
}

console.log(contarCaracteres("programacion"));