import axios from 'axios'
import { Request, Response } from 'express'
import iconv from 'iconv-lite'
import { extractDepartures } from '../utils'
import 'dotenv/config'

export async function getStationData(req: Request, res: Response) {
	try {
		const stationId = req.params.id

		if (!stationId) return res.status(400).send('Missing station ID.')
		if (!(/^\d+$/.test(stationId))) return res.status(400).send('ID param is not a number')

		const postData = new URLSearchParams({
			orientation: 'P',
			mobver: '1',
			active_View: '2',
			station_id: stationId,
			scrpos: '0'
		})
	
		const { data } = await axios.post('https://rovr.info', postData, {
			responseType: 'arraybuffer',
			headers: {
				'User-Agent': `bulgaria-railways-backend/1.0 (server-side application; +mailto:${process.env.SUPPORT_EMAIL}) AppleWebKit/605.1.15 (KHTML, like Gecko)`
			}
		})
		const decodedData = iconv.decode(data, 'windows-1251') 
		const stationData = extractDepartures(decodedData)
		res.send(stationData)
	} catch (error) {
		res.status(500).send('An unexpected error occured.\n' + error)
	}
}
