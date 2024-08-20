const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo....')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => { // <-- ejecuta una promesa añadiendo /promises en el require
    console.log('primer text: ', text)
  })

console.log('Hacer cosas mientras se lee el primer archivo....')

console.log('Leyendo el segundo archvio....')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text2 => {
    console.log('segundo text: ', text2)
  })

// Esto solo en los módulos nativos que no tienen promesas nativas (ver documentación)
// const  { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)
// fs.readFilePromise('./archivo2.txt', 'utf-8')
// .then(text2 => {
//    console.log('segundo text: ',text2)
// })
