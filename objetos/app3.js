const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    
    }

// agregando nuevas propiedades al objeto
// se sigue usando la sintaxis del punto la unica diferencia es que al estar afuera 
// del objeto y no tiene que tener el mismo nombre sino se reescribe
producto.imagen = "imagen.jpg";

// para borrar una propiedad del objeto tambien se usa la sintaxis del punto solo 
// con la palabra reservada delete antes

delete producto.disponible;


function mostrar(){
console.log(producto);

}

mostrar();