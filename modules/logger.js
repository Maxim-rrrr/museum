"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, colorize, printf } = winston_1.format;
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
require('winston-mongodb');
const logger = winston_1.createLogger({
    transports: [
        new winston_1.transports.Console({
            format: combine(timestamp(), colorize(), myFormat)
        }),
        new winston_1.transports.File({
            filename: 'logs/logs.log',
            format: combine(timestamp(), myFormat)
        }),
        // new transports.MongoDB({
        //     db: config.get('mongoUrl'),
        //     options: {
        //         useUnifiedTopology: true
        //     },
        //     collection: 'log',
        //     format: combine(timestamp(), json())
        // })
    ]
});
exports.default = logger;
