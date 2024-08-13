const path = require('node:path')

// devuelve la barra separadora de carpetas según sistema operativo
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Obtener el nombre del fichero
const base = path.basename(filePath)
console.log(base)

// Nombre del fichero sin extensión
const fileName = path.basename(filePath, '.txt')
console.log(fileName)

// Obtener la extensión
const extension = path.extname(base)
console.log(extension)
