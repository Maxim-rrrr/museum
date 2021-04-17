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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const fileStorage_1 = __importDefault(require("../modules/fileStorage"));
const HeroSection_1 = require("../Schemes/HeroSection");
const HeroPage_1 = require("../Schemes/HeroPage");
/**
 * /api/hero/create
 * Создание страницы ветерана
 *
 * @param {String} sections распарсить в JSON
 * @param {Array} images
 *
 * @returns { object }
 */
router.post("/create", fileStorage_1.default.array('images'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sections = JSON.parse(req.body.sections);
        let images = req.files;
        let page = {
            status: "verification",
            email: req.body.email,
            nameHero: req.body.nameHero,
            surnameHero: req.body.surnameHero,
            patronymicHero: req.body.patronymicHero,
            sections: [],
        };
        yield sections.forEach((section) => __awaiter(void 0, void 0, void 0, function* () {
            if (section.content.img) {
                section.content.img = images.shift().filename;
            }
            if (section.content.img1) {
                section.content.img1 = images.shift().filename;
            }
            if (section.content.img2) {
                section.content.img2 = images.shift().filename;
            }
            const s = yield HeroSection_1.HeroSection.create(section).then();
            page.sections.push(s._id);
        }));
        yield HeroPage_1.HeroPage.create(page).then(p => {
            res.send(p);
        });
        // res.send(true)
    }
    catch (error) {
        console.log(error);
        res.send(false);
    }
}));
module.exports = router;
