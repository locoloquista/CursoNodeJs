// Argumemtos de entrada
// console.log(process.argv)

// controlar el proceso y su salida
// process.exit(1)

// podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar recursos
})

// current working directory
console.log(process.cwd())

// variables de entorno
console.log(process.env.PEPITO)
// PEPITO=hola node 7-process.js
