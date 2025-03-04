// Archivo ejercicio14.js
const cola = ['Juan', 'Ana', 'Carlos'];

function gestionarCola(accion, datos) {
  switch (accion) {
    case 'añadir':
      cola.push(datos);
      console.log(cola);
      break;
    case 'atender':
      const clienteAtendido = cola.shift();
      console.log(clienteAtendido);
      console.log(cola);
      break;
    case 'siguiente':
      console.log(cola[0]);
      break;
    case 'contar':
      console.log(cola.length);
      break;
    default:
      console.log('Acción no reconocida');
  }
}

// Ejemplo de uso
gestionarCola('añadir', 'Luis');
gestionarCola('atender');
gestionarCola('siguiente');
gestionarCola('contar');
