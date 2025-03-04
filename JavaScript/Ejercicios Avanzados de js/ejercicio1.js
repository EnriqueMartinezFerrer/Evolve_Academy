// Archivo ejercicio1.js
let inventario = [
    { nombre: 'Laptop', cantidad: 10, precio: 800 },
    { nombre: 'Teclado', cantidad: 50, precio: 20 },
    { nombre: 'Ratón', cantidad: 30, precio: 10 }
  ];
  function gestion(accion, datos) {
    switch (accion) {
        case 'agregar':
            inventario.push({nombre: datos.nombre, cantidad: datos.cantidad, precio: datos.precio});            
            break;
        case 'eliminar':
            inventario = inventario.filter((producto) => producto.nombre !== datos.nombre);
            break;
        case 'filtrar':
            return inventario.filter(producto => producto.precio > producto.minPrecio);
        case 'ordenar':
            return [...inventario].sort((a, b) => b.cantidad - a.cantidad);
        case 'mostrar':
          console.log(inventario);
          break;
        default:
            console.log('Acción no reconocida');
    }
    
  }
  gestion('mostrar');
  gestion('agregar', { nombre: 'Monitor', cantidad: 15, precio: 150 });
  gestion('mostrar');
  gestion('eliminar', { nombre: 'Teclado'});
  gestion('mostrar'); 