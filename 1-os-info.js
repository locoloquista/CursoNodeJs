// Modulos nativos de Node con CommonJs

const os = require('node:os')

console.log('INFORMACION DEL SISTEMA OPERATIVO')
console.log('---------------------------------')

console.log('Nombre del sistema operativo: ', os.platform())
console.log('Version del sistema operativo: ', os.release())
console.log('Arquitectura: ', os.arch())
console.log('Memoria libre: ', os.freemem() / 1024 / 1024)
console.log('Memoria total: ', os.totalmem() / 1024 / 1024)
console.log('CPUs: ', os.cpus())
console.log('Horas trabajando: ', os.uptime() / 60 / 60)
