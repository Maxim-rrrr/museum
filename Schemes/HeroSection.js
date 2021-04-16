"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroSection = void 0;
const ts_mongoose_1 = require("ts-mongoose");
const heroSection = ts_mongoose_1.createSchema({
    type: ts_mongoose_1.Type.number({ require: true }),
    content: ts_mongoose_1.Type.object({ require: true }),
    additionallyTop: ts_mongoose_1.Type.array({ default: [] }),
    additionallyBottom: ts_mongoose_1.Type.array({ default: [] }),
});
exports.HeroSection = ts_mongoose_1.typedModel("Setting", heroSection);
