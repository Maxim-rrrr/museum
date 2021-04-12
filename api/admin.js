"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("../modules/logger"));
const cryptor_1 = require("../modules/cryptor");
/**
 * /api/admin/login
 * Авторизация
 *
 * @param {string} login
 * @param {string} pass
 *
 * @returns { object } {status: 200, token} || {status, message}
 */
router.post("/login", (req, res) => {
    if (req.body.login === config_1.default.get("admin_login") &&
        req.body.pass === config_1.default.get("admin_pass")) {
        logger_1.default.info("Вход в админку");
        res.send({ status: 200, token: cryptor_1.encrypt(req.body.login) });
    }
    else {
        res.send({ status: 400, message: "Неверный логин или пароль" });
    }
});
/**
 * /api/admin/is_admin
 * Провекра админского токена
 *
 * @param {string} token
 *
 * @returns { boolean }
 */
router.post("/is-admin", (req, res) => {
    if (req.body.token) {
        cryptor_1.decrypt(req.body.token) == config_1.default.get("admin_login") ? res.send({ status: 200 }) : res.send({ status: 400, message: "Неверный админский токен" });
    }
    else {
        res.send({ status: 400, message: "Пустой токен" });
    }
});
module.exports = router;
