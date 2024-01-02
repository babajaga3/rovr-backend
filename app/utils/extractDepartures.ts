import * as cheerio from 'cheerio'

export interface TrainInfo {
  trainId: string
  currentDate: string
  scheduledArrival: string
  scheduledDeparture: string
  destinationStation: string
  currentStatus: string
  correctedArrival: string
  correctedDeparture: string
  departureStation: string
  finalDestination: string
}

export function extractDepartures(html: string): TrainInfo[] {
	const $ = cheerio.load(html)
	const trains: TrainInfo[] = []

	const rows = $('#ttable tr').toArray()
	for (let i = 0; i < rows.length; i += 3) {
		const trainRow = $(rows[i])
		const destinationRow = $(rows[i + 1])
		const departureRow = $(rows[i + 2])

		const trainId = trainRow.find('td').eq(0).text().trim()
		const currentDate = trainRow.find('td').eq(2).text().trim()
		const scheduledArrival = trainRow.find('td').eq(3).text().trim()
		const scheduledDeparture = trainRow.find('td').eq(5).text().trim()

		const destinationStation = destinationRow.find('td').eq(0).text().trim()
		const currentStatus = destinationRow.find('td').eq(2).text().trim()
		const correctedArrival = destinationRow.find('td').eq(3).text().trim()
		const correctedDeparture = destinationRow.find('td').eq(5).text().trim()

		const departureStation = departureRow.find('td').eq(0).text().trim()
		const finalDestination = departureRow.find('td').eq(2).text().trim()

		trains.push({
			trainId,
			currentDate,
			scheduledArrival,
			scheduledDeparture,
			destinationStation,
			currentStatus,
			correctedArrival,
			correctedDeparture,
			departureStation,
			finalDestination
		})
	}

	return trains
}
