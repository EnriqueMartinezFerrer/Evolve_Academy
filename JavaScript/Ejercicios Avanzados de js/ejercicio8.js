// Archivo ejercicio8.js
const carrito = [
    { producto: 'Laptop', precio: 800 },
    { producto: 'Ratón', precio: 20 }
  ];
  function simulacion(accion, datos){
    switch (accion) {
        case 'agregar':
            carrito.push({nombre: datos.producto, precio: datos.precio});            
            break;
        case 'eliminar':
            carrito.pop();
            console.log(carrito);
            break;
        case 'total':
            let suma = 0;
            for(let i = 0; i < carrito.length; i++){
                suma += carrito[i].precio
            }
            console.log(`Precio total del carrito: ${suma}`);
            return suma;
        case 'ordenar':
            return [...carrito].sort((a, b) => b.precio - a.precio);
        default:
            console.log('Acción no reconocida');
    }
}
// Ejemplo de uso

simulacion('eliminar'); 
