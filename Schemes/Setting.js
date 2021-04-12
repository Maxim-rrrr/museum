"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setting = void 0;
const ts_mongoose_1 = require("ts-mongoose");
const settingSchema = ts_mongoose_1.createSchema({
    type: ts_mongoose_1.Type.string({ required: true }),
    value: ts_mongoose_1.Type.string({ required: true }),
}, { timestamps: { createdAt: true } });
exports.Setting = ts_mongoose_1.typedModel("Setting", settingSchema);
