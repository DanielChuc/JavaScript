//Usamos constantes para traer paquetes al proyecto
const axios = require('axios')
    //promesas
    //axios es asincrono por lo tanto se debe trabajar con async y await
const main = async() => {
    //Solicitamos con get al servidor
    let response = await axios.get('https://rickandmortyapi.com/api/character')
        //desestructuracion de data
    let {
        data: { results },
    } = response;
    //con map traemos solo el id y el name de los personajes
    let characters = results.map((character) => {
        return {
            id: character.id,
            name: character.name,
        }
    })
    console.log(characters);
}

main()