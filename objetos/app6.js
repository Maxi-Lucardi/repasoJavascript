const producto ={
nombre:"Monitor 20 pulgadas",
precio: 300,
disponible: true,
informacion:{
    peso:"1kg",
    medida:"1m",


fabricacion:{
    pais: "china"
}
}
}

// descontructing  de objetos anidados

const {nombre, informacion,informacion:{fabricacion,fabricacion:{pais}}} = producto;


console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);