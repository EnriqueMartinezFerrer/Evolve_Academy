//Ejercicio 8
const palabraMasLarga = (palabras) => {
    let grande = '';
    palabras.forEach(el => {
      if(el.length > grande.length){
        grande = el;
      }
    })
    return grande;
  }
  
  console.log(palabraMasLarga(['sol', 'estrella', 'planeta', 'galaxia']))