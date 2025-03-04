//Ejercicio 7
  
const objet1 = {};
const objet2 = {};
function fusionarObjetos(objet1, objet2){
  let fusion = {};
  let objclv1 = Object.keys(objet1);
  let objclv2 = Object.keys(objet2);
  
  for(objelm1 in objclv1){
    for(objelm2 in objclv2){
      if(objelm2 != objelm1){
        fusion = {
          ...objet1
        };
      };
      fusion ={
        ...fusion,
        ...objet2
      };
    };
  };
  console.log(fusion);
}

fusionarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 });