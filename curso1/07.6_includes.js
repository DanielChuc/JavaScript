//includes
/**
 * El método includes() determina si una matriz incluye un determinado elemento, 
 * devuelve true o false según corresponda.
 */
var mascotas = ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('gato');
console.log(resultado);
//Verifica si la cadena de texto incluye la letra buscada s = false n=true
console.log('daniel'.includes('s'));
console.log('daniel'.includes('n'));

//Ejemplo de un buacador con filter e includes
var buscador = (parametro) => {
    let clientes = [
        { id: 1, nombre: 'Ada' },
        { id: 2, nombre: 'Katrina' },
        { id: 3, nombre: 'Dayana' },
        { id: 4, nombre: 'Pamela' },
        { id: 5, nombre: 'Michelle' },
    ];
    return clientes.filter((cliente) => cliente.nombre.includes(parametro))
}
console.log(buscador('na'));