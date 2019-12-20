var http = require('http')

http.createServer(function(req, res){
    res.end("Olá")
}).listen(8080) //Cria o servidor http e em seguida define a porta

console.log("Servidor Online!!")