"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const fileStorage_1 = __importDefault(require("../modules/fileStorage"));
/**
 * /api/hero/create
 * Создание страницы ветерана
 *
 * @param {String} sections распарсить в JSON
 * @param {Array} images
 *
 * @returns { object }
 */
router.post("/create", fileStorage_1.default.array('images'), (req, res) => {
    try {
        let sections = JSON.parse(req.body.sections);
        let images = req.files;
        sections.forEach((section) => {
            if (Object.keys(section.content).some(v => v == "img")) {
                section.content.img = images.shift().filename;
            }
            if (Object.keys(section.content).some(v => v == "img1")) {
                section.content.img1 = images.shift().filename;
            }
            if (Object.keys(section.content).some(v => v == "img2")) {
                section.content.img2 = images.shift().filename;
            }
        });
        console.log(sections);
        res.send(true);
    }
    catch (error) {
        console.log(error);
        res.send(false);
    }
});
module.exports = router;
