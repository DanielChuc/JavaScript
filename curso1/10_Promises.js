/**
 * Promises
 * El objeto Promise (Promesa) es usado para computaciones asíncronas.
 * Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
 *
 * new Promise( / ejecutor / function(resolver, rechazar) {... });
 *
 *
 * El método then() retorna una Promesa.
 * Recibe dos argumentos: funciones callback  para los casos de éxito y fallo de Promise.
 *
 * El método catch() retorna una Promise y solo se ejecuta en los casos en los que la promesa
 * se marca como Reject
 */
//Función que retorna un promesa
const getData = (error) =>
    new Promise((resolve, reject) => {
        if (!error) {
            setTimeout(() => {
                resolve({
                    nombre: 'Daniel',
                    apellido: 'Chuc',
                })
            }, 3000)
        } else {
            reject('No se pudo obtener los datos')
        }
    })

const getData2 = (error) =>
    new Promise((resolve, reject) => {
        if (!error) {
            setTimeout(() => {
                resolve({
                    nombre: 'Daniel',
                    apellido: 'Chuc',
                })
            }, 3000)
        } else {
            reject('No se pudo obtener los datos de data 2')
        }
    })
console.log('fin')

console.log('inicio')
getData(false)
    .then((data) => {
        //Encadenar then
        console.log(data)
        return getData2(true)
    }).then((data) => {
        console.log(data);
    })
    .catch((error) => {
        //El catch se encarga de todos los errores
        console.log(error)
    })

//Nueva promesa
const getData2 = new Promise((resolve, reject) => {})