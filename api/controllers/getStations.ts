import axios from 'axios'
import { Request, Response } from 'express'
import iconv from 'iconv-lite'
import { extractStations } from '../utils'

export async function getStations(_req: Request, res: Response) {
	try {
		const postData = new URLSearchParams({
			orientation: 'L',
			mobver: '1',
			active_View: '2',
			station_id: '18',
			scrpos: '0'
		})
	
		const { data } = await axios.post('https://rovr.info/', postData, {
			responseType: 'arraybuffer'
		})
		const decodedData = iconv.decode(data, 'windows-1251')
		const stations = extractStations(decodedData)
		res.send(stations) 
	} catch (error) {
		res.status(500).send('An unexpected error occured.\n' + error)
	}
}
