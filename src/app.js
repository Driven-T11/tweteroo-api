import express from "express"
import cors from "cors"

// Criação do app
const app = express()

// Configurações 
app.use(cors())
app.use(express.json())

// Funções (endpoints)
app.get("/teste", (req, res) => {
    res.send("Funcionou!!")
})

// Ligar a aplicação do servidor para ouvir requisições
const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))