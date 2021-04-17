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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("config"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("./modules/logger"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use('/api/admin', require('./api/admin'));
app.use('/api/setting', require('./api/setting'));
app.use('/api/hero', require('./api/hero'));
app.use("/uploads", express_1.default.static("uploads"));
app.use("/files", express_1.default.static("files"));
if (process.env.NODE_ENV === "production") {
    app.use("/", express_1.default.static(path_1.default.join(__dirname, "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, "client", "build", "index.html"));
    });
}
const PORT = config_1.default.get("port") || 4000;
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.get("mongoUrl"), {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            });
            app.listen(PORT, () => logger_1.default.info(`Запуск сервера порт: ${PORT}`));
        }
        catch (err) {
            console.log("Ошибка запуска сервера.", err.message);
            logger_1.default.error(`Ошибка запуска сервера. ${err.message}`);
            process.exit(1);
        }
    });
}
start();
