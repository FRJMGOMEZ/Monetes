let hbs = require('hbs');

const http = require('http');

http.createServer((req,res)=>{

res.writeHead(200,{'Content-type':'application/json'})

let salida = {nombre:'Javier',
              apellido:'Martínez',
              edad:28,
              nacionalidad:'Española',
              url:req.url};

res.write(JSON.stringify(salida));
res.end();
})
.listen(8080);


console.log('Escuchando el puerto 8080');
