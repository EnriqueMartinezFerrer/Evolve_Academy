// Archivo ejercicio1.js
const pedidos = [];

const agregarPedido = (id, cliente, platillo) => {
    pedidos.push({ id, cliente, platillo });
};

const eliminarPrimerPedido = () => {
    if (pedidos.length > 0) {
        return pedidos.shift();
    } else {
        console.log("No hay pedidos para eliminar.");
    }
};

const contarPedidos = () => pedidos.length;

const buscarPedidoPorCliente = (cliente) => pedidos.find(pedido => pedido.cliente.toLowerCase() === cliente.toLowerCase());

const obtenerPlatillos = () => pedidos.map(pedido => pedido.platillo);

const hayPedidoDePlatillo = (platillo) => pedidos.map(p => p.platillo).includes(platillo);

module.exports = { agregarPedido, eliminarPrimerPedido, contarPedidos, buscarPedidoPorCliente, obtenerPlatillos, hayPedidoDePlatillo, pedidos };
