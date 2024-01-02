import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT ?? 8080

import routes from './app/routes'

app.use(cors())
app.use(morgan('dev'))

app.use('/api', routes)

app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`)
})
