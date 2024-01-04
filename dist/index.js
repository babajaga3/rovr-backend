"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
const routes_1 = __importDefault(require("./app/routes"));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use('/api', routes_1.default);
app.get('/', (_req, res) => {
    res.send('Welcome dear stranger to my backend :), how re ya doing this fine day?');
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
