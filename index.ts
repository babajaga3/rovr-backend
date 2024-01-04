import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT ?? 8080

import routes from './app/routes'

app.use(cors())
app.use(morgan('dev'))
app.use((_req, res, next) => {
	res.setHeader('Cache-Control', 'no-store')
	res.setHeader('Pragma', 'no-cache')
	res.setHeader('Expires', '0')
	next()
})

app.use('/api', routes)
app.get('/', (_req, res) => {
	res.send('Welcome dear stranger to my backend :), how re ya doing this fine day?')
})

app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`)
})
