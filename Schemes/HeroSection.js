"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroSection = void 0;
const ts_mongoose_1 = require("ts-mongoose");
const heroSection = ts_mongoose_1.createSchema({
    type: ts_mongoose_1.Type.number({ require: true }),
    content: {
        text: ts_mongoose_1.Type.string(),
        text1: ts_mongoose_1.Type.string(),
        text2: ts_mongoose_1.Type.string(),
        img: ts_mongoose_1.Type.string(),
        img1: ts_mongoose_1.Type.string(),
        img2: ts_mongoose_1.Type.string(),
    },
    additionallyTop: ts_mongoose_1.Type.array({ default: [] }).of(ts_mongoose_1.Type.string()),
    additionallyBottom: ts_mongoose_1.Type.array({ default: [] }).of(ts_mongoose_1.Type.string()),
});
exports.HeroSection = ts_mongoose_1.typedModel("HeroSection", heroSection);
