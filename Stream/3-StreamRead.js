//Agora, quando você se conecta a esse servidor, 
// a mágica acontece (note o consumo de memória):
console.clear();
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

server.listen(8000);