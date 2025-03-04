const filtrarPalabras = (contarTipos) => {
    resultado = [];
    contarTipos.forEach(el => {
        if (el.length > 5)
            resultado.push(el); 
        
    });
    return resultado
}
console.log(filtrarPalabras(["elefante", "águila", "cielo", "oso", "universo"]))