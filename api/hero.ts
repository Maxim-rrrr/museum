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

    const pageId = await HeroPage.create(page).then()
    
    sections.forEach(async (section: heroSectionSchema) => {
      if (section.content.img) {
        section.content.img = images.shift().filename
      }
      if (section.content.img1) {
        section.content.img1 = images.shift().filename
      }
      if (section.content.img2) {
        section.content.img2 = images.shift().filename
      }
    })

    let sectionsId: Array<string> = []
    
    let len = 0
    sections.forEach(() => len++)

    sections.forEach(async (section: heroSectionSchema, index: number) => {
      const s = await HeroSection.create(section).then()
      sectionsId.push(s._id)
      
      if (index === len - 1) {
        
        HeroPage.updateOne({ _id: pageId }, {
            sections: sectionsId
        }).then(() => {
            HeroPage.findOne({ _id: pageId }).then(pe => res.send({status: 200, page: pe}))
        });
      }
      
    })

    
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

/**
 * /api/hero/getPage
 * Запрос страници по id 
 *
 * @param { id }
 * 
 * @returns { object } 
 */
router.post("/getPage", async (req: any, res: any) => {
  if (!req.body.id) {
    res.send({ status: 400, message: "Не указано поле id" })
    return
  }

  HeroPage.findOne({ _id: req.body.id }).then((page) => {
    if (!page) {
      res.send({ status: 400, message: "Указан неверный id" })
      return
    }

    page.sections.forEach(async (sectionId, index) => {
      HeroSection.findOne({ _id: sectionId }).then(section => {
        if (section) {
          page.sections[index] = section;
          if (index === page.sections.length - 1) {
              res.send({ status: 200, page })
          }
        }
      })
    })

    return page
    
  })

})

module.exports = router;