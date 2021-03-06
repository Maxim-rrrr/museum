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
    whoWrote: ts_mongoose_1.Type.string(),
    byWhom: ts_mongoose_1.Type.string(),
    nameHero: ts_mongoose_1.Type.string({ required: true }),
    surnameHero: ts_mongoose_1.Type.string({ required: true }),
    patronymicHero: ts_mongoose_1.Type.string(),
    sections: ts_mongoose_1.Type.array({ required: true }).of({
        type: ts_mongoose_1.Type.number({ require: true }),
        content: {
            text: ts_mongoose_1.Type.string(),
            text1: ts_mongoose_1.Type.string(),
            text2: ts_mongoose_1.Type.string(),
            img: ts_mongoose_1.Type.string(),
            img1: ts_mongoose_1.Type.string(),
            img2: ts_mongoose_1.Type.string(),
            img_sign: ts_mongoose_1.Type.string(),
            img_sign1: ts_mongoose_1.Type.string(),
            img_sign2: ts_mongoose_1.Type.string(),
            title: ts_mongoose_1.Type.string(),
            subtitle: ts_mongoose_1.Type.string(),
        }
    })
}, { timestamps: { createdAt: true } });
exports.HeroPage = ts_mongoose_1.typedModel("HeroPage", heroPage);
