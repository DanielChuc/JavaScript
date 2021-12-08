/**
 * async - await
 */
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
    });
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
const main = async() => {
    try {
        let resultado = await getData(false);
        let resultado2 = await getData2(true);

        console.log(resultado);
        console.log(resultado2);

    } catch (error) {
        console.log(error);
    }


}

main();