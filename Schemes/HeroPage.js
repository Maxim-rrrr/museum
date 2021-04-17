"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroPage = void 0;
const ts_mongoose_1 = require("ts-mongoose");
/** Статусы:
 * approved
 * verification
 * rejected
 */
const heroPage = ts_mongoose_1.createSchema({
    status: ts_mongoose_1.Type.string({ required: true }),
    email: ts_mongoose_1.Type.string({ required: true }),
    nameHero: ts_mongoose_1.Type.string({ required: true }),
    surnameHero: ts_mongoose_1.Type.string({ required: true }),
    patronymicHero: ts_mongoose_1.Type.string({ required: true }),
    sections: ts_mongoose_1.Type.array({ required: true }).of(ts_mongoose_1.Type.string())
}, { timestamps: { createdAt: true } });
exports.HeroPage = ts_mongoose_1.typedModel("HeroPage", heroPage);
