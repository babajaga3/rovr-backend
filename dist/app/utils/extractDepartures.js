"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractDepartures = void 0;
const cheerio = __importStar(require("cheerio"));
function extractDepartures(html) {
    const $ = cheerio.load(html);
    const trains = [];
    const rows = $('#ttable tr').toArray();
    for (let i = 0; i < rows.length; i += 3) {
        const trainRow = $(rows[i]);
        const destinationRow = $(rows[i + 1]);
        const departureRow = $(rows[i + 2]);
        const trainId = trainRow.find('td').eq(0).text().trim();
        const currentDate = trainRow.find('td').eq(2).text().trim();
        const scheduledArrival = trainRow.find('td').eq(3).text().trim();
        const scheduledDeparture = trainRow.find('td').eq(5).text().trim();
        const destinationStation = destinationRow.find('td').eq(0).text().trim();
        const currentStatus = destinationRow.find('td').eq(2).text().trim();
        const correctedArrival = destinationRow.find('td').eq(3).text().trim();
        const correctedDeparture = destinationRow.find('td').eq(5).text().trim();
        const departureStation = departureRow.find('td').eq(0).text().trim();
        const finalDestination = departureRow.find('td').eq(2).text().trim();
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
        });
    }
    return trains;
}
exports.extractDepartures = extractDepartures;
