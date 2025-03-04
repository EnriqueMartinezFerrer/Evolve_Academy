// Archivo ejercicio11.js
const publicaciones = [
    { likes: 50, comentarios: 10 },
    { likes: 200, comentarios: 30 },
    { likes: 120, comentarios: 20 }
  ];
  
  // Calcular total de likes
  const totalLikes = publicaciones.reduce((acc, pub) => acc + pub.likes, 0);
  console.log('Total de likes:', totalLikes);
  
  // Filtrar publicaciones con más de 100 likes
  const pubPopulares = publicaciones.filter(pub => pub.likes > 100);
  console.log('Publicaciones con más de 100 likes:', pubPopulares);
  
  // Ordenar publicaciones de mayor a menor popularidad (por likes)
  const pubOrdenadas = [...publicaciones].sort((a, b) => b.likes - a.likes);
  console.log('Publicaciones ordenadas por popularidad:', pubOrdenadas);