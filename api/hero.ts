import express from "express";
const router = express.Router();

import logger from "../modules/logger";
import upload from "../modules/fileStorage";
import delFile from "../modules/delFile"

import { heroSectionSchema, HeroSection } from "../Schemes/HeroSection"
import {heroPageSchema, HeroPage} from "../Schemes/HeroPage"

/**
 * /api/hero/create
 * Создание страницы ветерана
 *
 * @param {String} sections распарсить в JSON
 * @param {Array} images 
 *
 * @returns { object } 
 */
router.post("/create", upload.array('images'), async (req: any, res: any) => {
  try {
    let sections = JSON.parse(req.body.sections)
    let images = req.files
    
    
    let page = {
      status: "verification",
      email: req.body.email,
      nameHero: req.body.nameHero,
      surnameHero: req.body.surnameHero,
      patronymicHero: req.body.patronymicHero,
      sections: [],
    }
    

    await sections.forEach(async (section: heroSectionSchema) => {
      if (section.content.img) {
        section.content.img = images.shift().filename
      }
      if (section.content.img1) {
        section.content.img1 = images.shift().filename
      }
      if (section.content.img2) {
        section.content.img2 = images.shift().filename
      }

      
      const s = await HeroSection.create(section).then()
      page.sections.push(s._id)
    })

    await HeroPage.create(page).then(p => {
      res.send(p)
    })

    // res.send(true)
  } catch (error) {
    console.log(error)
    res.send(false)
  }
});

/**
 * /api/hero/getPages
 * Запрос всех страниц
 *
 * @returns { object } 
 */
router.post("/getPages", async (req: any, res: any) => {
  HeroPage.find({}).then(pages => {
    res.send({ status: 200, pages })
  })
})

module.exports = router;