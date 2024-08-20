const path = require('node:path')
const fs = require('node:fs/promises')
const pico = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pico.red(`No se pudo leer el directorio: ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async file => {
    const filepath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filepath)// informacion del archivo
    } catch {
      console.error(pico.red(`No se pudo leer el archivo ${filepath}`))
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${pico.blue(file.padEnd(30))} ${pico.green(fileSize.toString().padStart(10))} ${pico.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filePromises)

  filesInfo.forEach(fileInfo => {
    console.log(fileInfo)
  })
}

ls(folder)
