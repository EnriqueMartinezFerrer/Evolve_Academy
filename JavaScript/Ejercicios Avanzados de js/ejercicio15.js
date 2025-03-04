// Archivo ejercicio15.js
const inventario1 = [
    { nombre: 'Laptop', cantidad: 10, precio: 800 },
    { nombre: 'Teclado', cantidad: 20, precio: 30 }
  ];
  
  const inventario2 = [
    { nombre: 'Ratón', cantidad: 15, precio: 10 },
    { nombre: 'Monitor', cantidad: 5, precio: 200 }
  ];
  
  function gestionarInventario(accion, datos) {
    switch (accion) {
      case 'añadir':
        const nuevoInventario = [...inventario1, datos];
        console.log(nuevoInventario);
        return nuevoInventario;
      case 'actualizar':
        const inventarioActualizado = inventario1.map(producto =>
          producto.nombre === datos.nombre ? { ...producto, precio: datos.precio } : producto
        );
        console.log(inventarioActualizado);
        return inventarioActualizado;
      case 'eliminarSinStock':
        const inventarioFiltrado = inventario1.filter(producto => producto.cantidad > 0);
        console.log(inventarioFiltrado);
        return inventarioFiltrado;
      case 'combinar':
        const inventarioCombinado = [...new Map([...inventario1, ...inventario2].map(item => [item.nombre, item])).values()];
        console.log(inventarioCombinado);
        return inventarioCombinado;
      default:
        console.log('Acción no reconocida');
    }
  }
  
  // Ejemplo de uso
  gestionarInventario('añadir', { nombre: 'Impresora', cantidad: 7, precio: 150 });
  gestionarInventario('actualizar', { nombre: 'Laptop', precio: 750 });
  gestionarInventario('eliminarSinStock');
  gestionarInventario('combinar');
  