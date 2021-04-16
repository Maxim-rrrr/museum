"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroPage = void 0;
const ts_mongoose_1 = require("ts-mongoose");
const heroPage = ts_mongoose_1.createSchema({
    public: ts_mongoose_1.Type.boolean({ required: true }),
    email: ts_mongoose_1.Type.string({ required: true }),
    nameHero: ts_mongoose_1.Type.string({ required: true }),
    sections: ts_mongoose_1.Type.array({ required: true })
}, { timestamps: { createdAt: true } });
exports.HeroPage = ts_mongoose_1.typedModel("Setting", heroPage);
