
const http = require('http');
 
http.createServer((req, res ) => { 
//    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
//    res.writeHead(200, { 'Conten-Type': 'application/csv' })

    res.write('Hola mundo');
    res.end();
}) 
.listen( 8080 );

console.log('escuchando en el puerto',8080);
