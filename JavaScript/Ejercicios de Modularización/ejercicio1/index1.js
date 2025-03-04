// Archivo index1.js
const { agregarPedido, eliminarPrimerPedido, contarPedidos, buscarPedidoPorCliente, obtenerPlatillos, hayPedidoDePlatillo, pedidos } = require('./pedidos');

agregarPedido(1, 'Carlos', 'Pizza');
agregarPedido(2, 'Laura', 'Hamburguesa');
agregarPedido(3, 'Pedro', 'Ensalada');

console.log("Lista de pedidos:", pedidos);
console.log("Total de pedidos:", contarPedidos());

console.log("Eliminando primer pedido...");
eliminarPrimerPedido();
console.log("Lista de pedidos tras eliminación:", pedidos);

console.log("Buscando pedido de Laura:", buscarPedidoPorCliente('Laura'));

console.log("Nombres de los platillos:", obtenerPlatillos());

console.log("¿Hay un pedido de 'Hamburguesa'?", hayPedidoDePlatillo('Hamburguesa'));
console.log("¿Hay un pedido de 'Sushi'?", hayPedidoDePlatillo('Sushi'));
