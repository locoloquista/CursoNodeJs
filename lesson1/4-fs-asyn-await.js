const { readFile } = require('node:fs/promises');

// IIFE - Inmediatly Invoke Function Expression
(
  async () => {
    console.log('Leyendo el primer archivo....')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('primer text: ', text)

    console.log('Hacer cosas mientras se lee el primer archivo....')

    console.log('Leyendo el segundo archvio....')
    const text2 = await readFile('./archivo2.txt', 'utf-8')
    console.log('segundo text: ', text2)
  }
)()
