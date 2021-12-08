//concat,sort,slice,splice
/**
 * El método concat() se usa para unir dos o más arrays. 
 * Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
 */

var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 0];
var array3 = array1.concat(array2);
var array4 = [...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

/**
 * El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.
 * Los ordena con base al codigó ascii
 */
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array1.sort());


var meses = ['Dic', 'Ene', 'Mar', 'Feb'];
console.log(meses.sort());

var array = [1, 10000, 21, 30, 4];
var ordenado = array.sort((a, b) => a - b)
console.log(ordenado);

/**
 * El método splice() cambia el contenido de un array eliminando elementos existentes y/o 
 * agregando nuevos elementos.
 */
//Se ubica en el primer elemento, borra el primer elemendo despues del ubicado, reemplaza el eliminado
var nombres = ['Daniel', 'Eduardo', 'Dayana'];
nombres.splice(1, 1, 'Ada');
console.log(nombres);
/**
 *El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando 
 *por inicio hasta fin (fin no incluido). El array original no se modificará. 
 */
var nombres = ['Daniel', 'Eduardo', 'Dayana'];
var resultado = nombres.slice(1, 2); //No incluye la ultima posicion
console.log(resultado);
console.log(nombres);