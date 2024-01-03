export type Station = {
	stationId: number
	stationName: string
}

export type Stations = Station[]

export type StationData = {
	trainId: string;
	currentDate: string;
	scheduledArrival: string;
	scheduledDeparture: string;
	destinationStation: string;
	currentStatus: string;
	correctedArrival: string;
	correctedDeparture: string;
	departureStation: string;
	finalDestination: string;
}
