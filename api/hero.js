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
        sections.forEach((section) => __awaiter(void 0, void 0, void 0, function* () {
            if (section.content.img) {
                section.content.img = images.shift().filename;
            }
            if (section.content.img1) {
                section.content.img1 = images.shift().filename;
            }
            if (section.content.img2) {
                section.content.img2 = images.shift().filename;
            }
        }));
        let page = {
            status: "verification",
            email: req.body.email,
            nameHero: req.body.nameHero,
            surnameHero: req.body.surnameHero,
            patronymicHero: req.body.patronymicHero,
            sections,
        };
        HeroPage_1.HeroPage.create(page).then(p => res.send(p));
    }
    catch (error) {
        console.log(error);
        res.send(false);
    }
}));
/**
 * /api/hero/getPages
 * Запрос всех страниц
 *
 * @returns { object }
 */
router.post("/getPages", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    HeroPage_1.HeroPage.find({}).then(pages => {
        res.send({ status: 200, pages });
    });
}));
/**
 * /api/hero/getPage
 * Запрос страници по id
 *
 * @param { id }
 *
 * @returns { object }
 */
router.post("/getPage", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.id) {
        res.send({ status: 400, message: "Не указано поле id" });
        return;
    }
    HeroPage_1.HeroPage.findOne({ _id: req.body.id }).then((page) => {
        if (!page) {
            res.send({ status: 400, message: "Указан неверный id" });
            return;
        }
        // page.sections.forEach(async (sectionId, index) => {
        //   HeroSection.findOne({ _id: sectionId }).then(section => {
        //     if (section) {
        //       page.sections[index] = section;
        //       if (index === page.sections.length - 1) {
        //           res.send({ status: 200, page })
        //       }
        //     }
        //   })
        // })
        res.send({ status: 200, page });
    });
}));
module.exports = router;
