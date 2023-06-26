import express, { json } from "express"
import cors from "cors"

// Criação do app
const app = express()

// Configurações 
app.use(cors())
app.use(json())

// Variáveis Globais
const users = []
const tweets = []

// Funções (endpoints)
app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body
    users.push({ username, avatar })
    console.log(users)
    res.send("Ok!")
})

// Ligar a aplicação do servidor para ouvir requisições
const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))