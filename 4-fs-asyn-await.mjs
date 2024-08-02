import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo....')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer text: ',text)


console.log('Hacer cosas mientras se lee el primer archivo....')

console.log('Leyendo el segundo archvio....')
const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo text: ',text2)



//Esto solo en los módulos nativos que no tienen promesas nativas (ver documentación)
// const  { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)
// fs.readFilePromise('./archivo2.txt', 'utf-8')
//.then(text2 => {
//    console.log('segundo text: ',text2)
//})