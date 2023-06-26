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
    res.send("Ok!")
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body

    // find => retornar undefined se não achar OU o objeto do usuário se achar
    const userExists = users.find((user) => user.username === username)

    if (!userExists) return res.send("UNAUTHORIZED")

    tweets.push({ username, tweet })
    res.send("OK")
})

app.get("/tweets", (req, res) => {
    const completeTweets = tweets.map((tweet) => {
        const user = users.find((user) => user.username === tweet.username)
        return { ...tweet, avatar: user.avatar }
    })

    res.send(completeTweets.slice(-10).reverse())
})

// Ligar a aplicação do servidor para ouvir requisições
const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))