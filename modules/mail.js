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
const nodemailer_1 = __importDefault(require("nodemailer"));
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("config"));
/**
 * Функция отправки сообщений на почту
 *
 * @param {string} to Email получателя
 * @param {string} subject Заголовок
 * @param {string} text Текст письма
 * @param {string} html Что-то форматированное через HTML
 * @param {Array} attachments  Список файлов прикреплённых к письму
 *
 * @returns { bool }
 */
function mail(to, subject = '', text = '', html = '', attachments = []) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let transporter = nodemailer_1.default.createTransport({
                host: 'smtp.mail.ru',
                port: 465,
                secure: true,
                auth: {
                    user: config_1.default.get('emailSendMessage'),
                    pass: config_1.default.get('passSendMessage')
                }
            });
            let result = yield transporter.sendMail({
                from: `"Магистраль Авто" <${config_1.default.get('emailSendMessage')}>`,
                to,
                subject,
                text,
                html,
                attachments
            });
            logger_1.default.info(`Успешная отправка сообщения на почту. ${JSON.stringify({ to, subject, text, html })}`);
            return true;
        }
        catch (err) {
            logger_1.default.error(`Ошибка отправки сообщения на почту. ${JSON.stringify({ to, subject, text, html })}. ${err}`);
            return false;
        }
    });
}
exports.default = mail;
