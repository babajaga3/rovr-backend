import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import process from 'process'

const app = express()
const PORT = process.env.PORT ?? 8080

import routes from './app/routes'

app.use(cors())
app.use(morgan('dev'))

app.use('/api', routes)

app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`)
})
