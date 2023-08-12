//importando modolos
const express = require("express")
const path = require("path")


// aplicação que retorne um tipo express e trabalhando com as instancias do express
// criaçaõ da aplicação
const app = express()
const router = express.Router()


//Criando rotas

router.get("/", (req, res)=>{

    //caminhos 
    // juntando com "join" a pasta atual com "__dirname"
    // juntando dois caminhos
    
    /*
    
    Estou utilizando o path, pois com ele eu posso
    usar o __dirname para recuperar a localisação atual do projeto. Por isso usamos o path 
    
    */ 
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

// diz que a aplicação irá utilizar as rotas 
app.use(router)

//fazer a aplicação ouvir as requisições

app.listen(3333, ()=>{

    console.log("Servidor rodando")

})




