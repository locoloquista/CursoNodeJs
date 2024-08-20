const http = require('node:http')
const { findAvailablePort } = require('./10-free-port.js')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo!!!')
})

findAvailablePort(100).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})

// server.listen(3000, () => {
// console.log('Server listening on port 3000')
// })
