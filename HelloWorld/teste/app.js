var http = require('http')

http.createServer(function(req, res){
    res.end("Bems vindo ao meu app")
}).listen(8080) //Cria o servidor http e em seguida define a porta

console.log("Servidor Online!!")
