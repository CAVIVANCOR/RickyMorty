var http = require('http');
const axios =require('axios');
const characters = require('../utils/data')
const PORT = 3001;
const {getCharById} =require('../controllers/index');

http.createServer((req,res)=>{
    console.log('req.url', Date(),req.url);
    const allUrl = req.url.split("/");
    const id=Number(allUrl.pop());
    const url=allUrl.join("/");
   // console.log(allUrl,id,url);

    switch (url) {
        case "/onsearch":
            return getCharById(res,id)
        default:
            res.writeHead(404,{ 'Content-Type':'text/plain' }); //Ponemos el status del response a 404: Not Found
            res.end('Route not found'); //No devolvemos nada más que el estado.
    }


    // console.log('id', id);
    // if (url === '/rickandmorty/character'){
    //     if (id){
    //         const character = characters.find((ch)=>(ch.id===id))
    //         if (character){
    //             console.log('Entro character',character);
    //             res.writeHead(200, { 'Content-Type':'application/json' })
    //             res.end(JSON.stringify(character)); //No devolvemos nada más que el estado.
    //         }else{
    //             res.writeHead(404,{ 'Content-Type':'text/plain' }); //Ponemos el status del response a 404: Not Found
    //             res.end('json not found'); //No devolvemos nada más que el estado.
    //         }
    //     }else{
    //         // console.log('character',character);
    //         res.writeHead(200, { 'Content-Type':'application/json' })
    //         res.end(JSON.stringify(characters)); //No devolvemos nada más que el estado.
    //     }   
    // }
    // else{
    //     res.writeHead(404,{ 'Content-Type':'text/plain' }); //Ponemos el status del response a 404: Not Found
    //     res.end('Route not found'); //No devolvemos nada más que el estado.
    // }
}).listen(PORT,'localhost');