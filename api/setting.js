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
const router = express_1.default.Router();
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("../modules/logger"));
const cryptor_1 = require("../modules/cryptor");
const Setting_1 = require("../Schemes/Setting");
const fileStorage_1 = __importDefault(require("../modules/fileStorage"));
/**
 * /api/setting/get
 * Получение настроек
 *
 *
 * @returns { object }
 */
router.post("/get", (req, res) => {
    Setting_1.Setting.find({}).then(settings => {
        let result = {};
        settings.forEach(setting => {
            result = Object.assign(Object.assign({}, result), { [setting.type]: setting.value });
        });
        res.send(result);
    });
});
/**
 * /api/setting/set
 * Изменение настроек
 *
 * @param {string} token админский токен
 * @param {Array} data
 *
 * @returns { object } {status: 200, token} || {status, message}
 */
router.post("/set", fileStorage_1.default.single('partnerCard'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (cryptor_1.decrypt(req.body.token) !== config_1.default.get("admin_login")) {
        res.send({ status: 400, message: "Неверный токен админа" });
        logger_1.default.info("Попытка отправки запроса /api/setting/set с неверным токеном админа");
        return;
    }
    function update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            data.forEach((elem) => __awaiter(this, void 0, void 0, function* () {
                let setting = yield Setting_1.Setting.findOne({ type: elem.type });
                if (setting) {
                    let _id = setting._id;
                    yield Setting_1.Setting.updateOne({ _id }, { value: elem.value }).then();
                }
                else {
                    yield Setting_1.Setting.create(elem).then();
                }
            }));
        });
    }
    function updatePartnerCard(partnerCard) {
        return __awaiter(this, void 0, void 0, function* () {
            let setting = yield Setting_1.Setting.findOne({ type: "partnerCard" });
            if (setting) {
                let _id = setting._id;
                yield Setting_1.Setting.updateOne({ _id }, { value: partnerCard }).then();
            }
            else {
                yield Setting_1.Setting.create({
                    type: "partnerCard",
                    value: partnerCard
                }).then();
            }
        });
    }
    try {
        let data = JSON.parse(req.body.data);
        yield update(data);
        if (req.file) {
            yield updatePartnerCard(req.file.filename);
        }
        yield Setting_1.Setting.find({}).then(settings => {
            res.send({ status: 200, settings });
        });
    }
    catch (e) {
        res.send({ status: 400, message: e });
    }
}));
module.exports = router;
