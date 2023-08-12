
// criando o servidor com a a biblioteca http
// chamando a biblioteca http
const http = require("http")

// quem estar hospedando?
const hostname = "localhost"

//porta que ficara aberta para o cliente usar:
const port = 3333


//criando o servidor que responde pela response: "hellow word"
const server = http.createServer((req, res)=>{

    res.setHeader("Content-type", "text/plain")
    res.end("Hellow word")

})

// fazer o servidor ouvir as requisições de quem estiver chamando ele

server.listen(port, hostname, ()=>{

    console.log("Servidor Rodando")

})

// servidor simples criado de forma bruta