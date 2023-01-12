const axios = require('axios');
//const ruta = 'http://localhost:3001/onsearch';

const getCharById = function(res, id){
    axios(`https://rickandmortyapi.com/api/character/${id}`) 
    .then((response)=>response.data)
    .then((data)=>{
        console.log("data",data);
        const character={
            image:data.image,
            name:data.name,
            gender:data.gender,
            species:data.species,
            id:data.id
        };
        res.writeHead(200, { 'Content-Type':'application/json' })
        res.end(JSON.stringify(character)); //No devolvemos nada más que el estado.
    })
    .catch((err)=>{
        res.writeHead(500,{ 'Content-Type':'text/plain' }); //Ponemos el status del response a 404: Not Found
        res.end('character not found'); //No devolvemos nada más que el estado.
    });
}

const getCharDetail = function(res, id){
    axios(`https://rickandmortyapi.com/api/character/${id}`) 
    .then((response) => response.data)
    .then((data) => {
      // console.log(data)
      const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        id: data.id,
        status:data.status,
        origin:data.origin
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end('character not found'); //No devolvemos nada más que el estado.
    });
}

module.exports = {
    getCharById,
    getCharDetail
}