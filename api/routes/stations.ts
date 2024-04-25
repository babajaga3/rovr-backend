import express from 'express'
import { getStationData, getStations } from '../controllers'

const router = express.Router()

router.get('/', getStations)
router.get('/:id', getStationData)

export default router
