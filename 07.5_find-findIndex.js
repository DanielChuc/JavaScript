//find -- findIndex
/**
 * El método find() devuelve el valor del primer elemento del array 
 * que cumple la función de prueba proporcionada.
 */
var clientes = [
    { id: 1, nombre: 'Ada' },
    { id: 2, nombre: 'Katrina' },
    { id: 3, nombre: 'Dayana' },
    { id: 4, nombre: 'Pamela' },
    { id: 1, nombre: 'Michelle' },
];

var cliente = clientes.find((cliente) => cliente.id === 1);
//comparar con filter
var filter = clientes.filter((cliente) => cliente.id === 1);

console.log(clientes);
console.log(cliente);
console.log(filter);

/**
 * El método findIndex() devuelve la posición del primer elemento de un array 
 * que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
 */
var clientes = [
    { id: 1, nombre: 'Ada' },
    { id: 2, nombre: 'Katrina' },
    { id: 3, nombre: 'Dayana' },
    { id: 4, nombre: 'Pamela' },
    { id: 1, nombre: 'Michelle' },
];
var posicion = clientes.findIndex((e) => e.id === 4);
console.log(posicion);
console.log(clientes[posicion]);