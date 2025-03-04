//Ejercicio 9
  
function validarPropiedades(objeto, claves){
    let contclaves = 0;
   
   for (const el in objeto) {
     for(let i = 0; i< claves.length; i++){
       if(el === claves[i]){
         contclaves++;
       }
     }
   }
   
   if(contclaves === claves.length){
     return true;
   }else{
     return false;
   }
 }
 console.log(validarPropiedades({ nombre: "Juan", edad: 30, ciudad: "Madrid" }, ["nombre", "edad"]));
 console.log(validarPropiedades({ nombre: "Juan", edad: 30 }, ["nombre", "ciudad"]));