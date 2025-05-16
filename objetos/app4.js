const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    marca: "Samsung",
    
    }
// antes se usaba esto

// const nombre = producto.nombre;

// para acceder al valor del objeto especifico

// console.log(nombre);

// ahora usamos la creacion de una variable en un mismo paso
//  lo mque llamaremos destructuring sacar de una estructura

 const { nombre, marca , precio } = producto;
console.log(nombre);
console.log(marca);
console.log(precio);


// const {marca} = producto;
// console.log (marca);

//  se crea una variable con los datos dentro del objeto que sea igual al nombre del objeto
// para poder sacr ese dato de la estructura (objeto)
//  en este caso nombre es la variable de la cual se quiere sacar la informacion (monitor 20 pulgadas)
//  del objeto producto.
//  se pueden extraer los datos siempre y cuando existan en el objeto