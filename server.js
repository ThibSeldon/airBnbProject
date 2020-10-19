const http = require('http');

const server = http.createServer((req,res) => {
res.end('Le Serveur tourne'); 
});

server.listen(process.env.PORT || 3000);