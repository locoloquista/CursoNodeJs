const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Nombre de la película inválida.',
    required_error: 'El nombre de la película es obligatorio.'
  }),
  year: z.number().int().positive().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(1).max(10).default(5),
  poster: z.string().url({
    message: 'URL del poster de la película inválida'
  }).endsWith('.jpg'),
  genre: z.array(
    z.enum(['Biography', 'Drama', 'Action', 'Adventure', 'Fantasy', 'Sci-Fi', 'Animation']),
    {
      required_error: 'El genero de la película es requerido',
      invalid_type_error: 'El género de la película erroneo'
    }
  )
})

function validateMovie (object) {
  return movieSchema.safeParse(object)
}

function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object)
}

module.exports = {
  validateMovie,
  validatePartialMovie
}
