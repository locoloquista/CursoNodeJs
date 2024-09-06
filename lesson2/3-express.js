const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()

app.disable('x-powered-by') // para desactivar la cabecera que indica la tecnologia que utiliza la api

const PORT = process.env.PORT ?? 1234

// middleware
// app.use((req, res, next) => {
// console.log('Mi primer middleware')
// Se puede trackear la request a la BD
// revisar si el usuario está logueado
// Se puede usar para rutas especificas, metodos get o post, etc
// next()
// })

app.use(express.json())
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next

//   // Solo llegarán request que son POST y que tienen header Content-Type: application/json

//   let body = ''
//   // Escuchar evento
//   req.on('data', chunck => {
//     body += chunck.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la informacion en el req.body
//     req.body = data

//     next()
//   })
// })

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi página</h1>') // Por defecto las peticiones devulven status 200
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404 - Página no encontrada</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
