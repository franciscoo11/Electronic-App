"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
require("./database/config");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api/v1/users', userRoutes_1.default);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((_req, res, _next) => {
    res.status(404).json('Not Found');
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error, _req, res, _next) => {
    if (error.name === 'CastError') {
        res.status(400).json('Id used is not correct');
    }
    else {
        res.status(500).json('Something goes wrong, try again later.');
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running ON ${PORT}`);
});
