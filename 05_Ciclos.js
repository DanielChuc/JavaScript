//Ciclos

//while
var contador = 1;
console.log(contador);
while (contador <= 5) {
    contador += 1;

    console.log('Hola Mundo!! ' + contador);

}

// Do while ---- La diferencia entre while y do while es que do while ejecuta el codigo una vez
var contador = 1;
do {
    console.log('Hola Mundo');
    contador += 1;
} while (contador <= 10);

//For

for (let i = 0; i <= 5; i++) {
    console.log('Hola Mundo!!');

}
//For in
/* 
La instrucción for-in itera sobre todas las propiedades enumerables de un objeto 
que está codificado por cadenas (ignorando los codificados por Símbolos, incluidas 
las propiedades enumerables heredadas.

    for(variable operadorIN objeto){
        instrucciones
    }
*/
var persona = {
    nombre: 'Daniel',
    apellido: 'Chuc',
    edad: 20,
};
for (let clave in persona) {
    console.log(clave, persona[clave]);


}

//For of
/* 
La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, 
como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, 
Map, Set e iterables definidos por el usuario. */

var arreglo = [1, 2, 3, 4, 5];
var nombre = "Daniel";
for (let valor of nombre) {
    console.log(valor);
}