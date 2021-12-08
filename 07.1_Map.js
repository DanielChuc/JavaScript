//Map--- Es inmutable
/**
 * El método map() crea un nuevo array con los resultados de la llamada a la 
 * función indicada aplicados a cada uno de sus elementos.
 */
var estudiantes = ['Dayana', 'Pamela', 'Ada', 'Katrina'];
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
});
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

var productos = [{
        nombre: 'Camisetas',
        precio: 15,
    },
    {
        nombre: 'Zapatillas',
        precio: 20,
    },
    {
        nombre: 'Pantalones',
        precio: 25,
    }
];

var productosImpuesto = productos.map((producto) => {
    /* producto.impuesto = .12; */
    return {
        ...producto,
        impuesto: .12
    }
});

var precios = productos.map((producto) => producto.precio)
console.log(productos);
console.log(productosImpuesto);
console.log(precios);