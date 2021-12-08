//Join
/**
 * El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) 
 * en una cadena y devuelve esta cadena.
 */

var elementos = ['aire', 'fuego', 'agua', 'tierra'];
var resultado = elementos.join('-');
console.log(resultado);

var clientes = [
    { id: 1, nombre: 'Ada' },
    { id: 2, nombre: 'Katrina' },
    { id: 3, nombre: 'Dayana' },
    { id: 4, nombre: 'Pamela' },
    { id: 5, nombre: 'Michelle' },
];
//console.log(clientes.join());


var csvGenerator = (array, separator = ',') => {
    //Obtenemos el primero elemento del arreglo
    let headers = Object.keys(array[0]).join(separator);
    //recorremos el array agregandole un separador y sacando solo los valores del objeto
    let data = array.map((e) => Object.values(e).join(separator))
    console.log(headers);
    data.forEach(e => {
        console.log(e);
    });
}
console.log(csvGenerator(clientes));


/**
 * El método Object.values() devuelve un array con los valores correspondientes a las propiedades 
 * enumerables de un objeto. 
 */
console.log(Object.values({ id: 5, nombre: 'Michelle' }));
/**
 * El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo orden 
 * como se obtienen en un loop normal
 */
console.log(Object.keys({ id: 5, nombre: 'Michelle' }));