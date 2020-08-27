var http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/http;charset=UTF-8' })
    var idiomas = req.headers["accept-language"]
    var retorno = "Os idiomas suportados no seu navegador são " + idiomas
    console.log('Processado!')
    res.write(retorno)
    res.end
}).listen(3000)

console.log('Servidor disponível na porta ' + '3000')