"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DB_URI = process.env.MONGO_URI;
mongoose_1.default.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected');
}).catch(err => {
    console.error(err);
    process.exit(0);
});
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('DB connected');
// });
// connection.on('error', err => {
//   console.error(err);
//   process.exit(0);
// });
