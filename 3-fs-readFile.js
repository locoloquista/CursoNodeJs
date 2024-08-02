const fs = require('node:fs')

console.log('Leyendo el primer archivo....')
//const text = fs.readFileSync('./archivo.txt', 'utf-8') --> método síncrono para leer archivos

fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{ // <--- Ejecuta el callback al terminar el readFile
    console.log(text)
})

console.log('Hacer cosas mientras se lee el primer archivo....')

console.log('Leyendo el segundo archvio....')
//const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')

fs.readFile('./archivo2.txt', 'utf-8', (err, text2)=>{
    console.log(text2)
})

