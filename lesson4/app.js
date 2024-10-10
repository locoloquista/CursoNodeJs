import express, { json } from 'express' // require -> common JS
import { moviesRouter } from './routes/movies'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.use(corsMiddleware)
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'Hola mundo' })
})

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
