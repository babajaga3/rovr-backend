"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStationData = void 0;
const axios_1 = __importDefault(require("axios"));
const iconv_lite_1 = __importDefault(require("iconv-lite"));
const utils_1 = require("../utils");
require("dotenv/config");
function getStationData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const stationId = req.params.id;
            if (!stationId)
                return res.status(400).send('Missing station ID.');
            if (!(/^\d+$/.test(stationId)))
                return res.status(400).send('ID param is not a number');
            const postData = new URLSearchParams({
                orientation: 'P',
                mobver: '1',
                active_View: '2',
                station_id: stationId,
                scrpos: '0'
            });
            const { data } = yield axios_1.default.post('https://rovr.info', postData, {
                responseType: 'arraybuffer',
                headers: {
                    'User-Agent': `bulgaria-railways-backend/1.0 (server-side application; +mailto:${process.env.SUPPORT_EMAIL}) AppleWebKit/605.1.15 (KHTML, like Gecko)`
                }
            });
            const decodedData = iconv_lite_1.default.decode(data, 'windows-1251');
            const stationData = (0, utils_1.extractDepartures)(decodedData);
            res.send(stationData);
        }
        catch (error) {
            res.status(500).send('An unexpected error occured.\n' + error);
        }
    });
}
exports.getStationData = getStationData;
