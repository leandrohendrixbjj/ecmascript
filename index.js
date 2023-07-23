console.clear()
import express from 'express'
import url from 'url'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000

//Obtém o caminho do diretório atual do arquivo
const actualPath = url.fileURLToPath(import.meta.url)

//Obtém o caminho do diretório public
const publicPath = path.join(actualPath, '../', "public/src")


app.use(express.static(publicPath))

app.listen(port, () => {
    console.log("Server is running at 3000")
})