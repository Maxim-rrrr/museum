"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const delFile = (name) => {
    fs_1.default.unlinkSync("./uploads/" + name);
};
exports.default = delFile;
