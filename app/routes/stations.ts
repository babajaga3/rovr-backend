import express from 'express'
import { getStations } from '../controllers'

const router = express.Router()

router.get('/', getStations)

export default router
