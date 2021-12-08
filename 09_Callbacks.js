//Callbacks
/**
 * Una función de callback es una función que se pasa a otra función como un argumento, 
 * que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
 */
//Callback === cb
const suma = (a, b, cb) => cb(a + b)
const imprimir = (data) => console.log(data);
suma(1, 2, imprimir);

/**************************************************************************/
const getData = (cb, cbError) => {
    if (false) {
        setTimeout(() => {
            cb({
                nombre: "Daniel",
                apellido: "Chuc",
            })
        }, 3000);

    } else {
        cbError(new Error('No se pudo obtener los datos'));
    }
}
const imprimirData = (data) => console.log(data);
const errorHandler = (error) => console.log(error);
getData(imprimirData, errorHandler);