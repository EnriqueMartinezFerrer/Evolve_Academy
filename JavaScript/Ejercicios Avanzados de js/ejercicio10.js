// Archivo ejercicio10.js
const participantes = ['Juan', 'Ana', 'Pedro', 'Luis'];
function inscripciones(accion, datos) {
    switch (accion) {
        case 'añadir':
            participantes.push(datos);
            console.log(participantes);
            break;
        case 'eliminar':
            const nuevosParticipantes = [...participantes.filter(el => el !== datos)];
            console.log(nuevosParticipantes);
            break;
        case 'filtrar':
            const filtrados = participantes.filter(el => el.toLowerCase().includes(datos.toLowerCase()));
            console.log(filtrados);
            break;
        case 'cadena':
            const cadena = participantes.join(', ');
            console.log(cadena);
            break;
        default:
            console.log('Acción no reconocida');
    }
    
}
inscripciones('añadir', 'Carlos');
inscripciones('eliminar', 'Ana');
inscripciones('filtrar', 'o');
inscripciones('cadena');