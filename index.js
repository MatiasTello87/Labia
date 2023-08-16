
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT


// Servir archivos estáticos
app.use(express.static('public'))

// Configurar rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// poner a escuchar la app en un puerto
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})