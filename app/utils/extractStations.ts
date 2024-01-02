import * as cheerio from 'cheerio'

export const extractStations = (html: string) => {
	const $ = cheerio.load(html)
	const stations: Array<{ stationId: number, stationName: string }> = []

	$('#select_station_0 option').each((_i, elem) => {
		const stationId = $(elem).attr('id')
		const stationName = $(elem).val()

		// Ignore the first option as it seems to be a placeholder
		if (stationName && stationId && stationId !== '-1') {
			stations.push({ stationId: parseInt(stationId), stationName: stationName.toString() })
		}
	})

	return stations
}
