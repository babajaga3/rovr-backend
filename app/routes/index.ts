import express from 'express'
import stationRoutes from './stations'

const router = express.Router()

router.use('/stations', stationRoutes)

export default router
