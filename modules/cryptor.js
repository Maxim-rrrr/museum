"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const config_1 = __importDefault(require("config"));
/**
 * Функция шифрования
 *
 * @param {string} text
 *
 * @returns { string }
 */
const encrypt = (text) => {
    text = text.toString();
    return crypto_js_1.default.AES.encrypt(text, config_1.default.get("crypto_key")).toString();
};
exports.encrypt = encrypt;
/**
 * Функция дешифровки
 *
 * @param {string} hash
 *
 * @returns { string }
 */
const decrypt = (hash) => {
    hash = hash.toString();
    return crypto_js_1.default.AES.decrypt(hash, config_1.default.get("crypto_key")).toString(crypto_js_1.default.enc.Utf8);
};
exports.decrypt = decrypt;
