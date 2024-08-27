const http = require('node:http')
const fs = require('node:fs')

const port = process.env.PORT ?? 1234

const proceessRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // Ok -> estado por defecto 200
    res.end('<h1>Bienvenido a mi página de inicio </h1>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // Ok
    res.end('<h1>Contacto </h1>')
  } else if (req.url === '/dameimagen') {
    fs.readFile('./lesson2/descarga.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 400 // Not Found
    res.end('<h1>404 - Página no encontrada</h1>')
  }
}

const server = http.createServer(proceessRequest)

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})

// ESTADOS DE RESPUESTAS DEL SERVIDOR AL CLIENTE
// 100-199: Respuestas informativas
// 200-299: Respuestas satisfactorias
// 300-399: Redirecciones
// 400-499: Errores del cliente
// 500-599: Errores del servidor
