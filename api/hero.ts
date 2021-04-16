import express from "express";
const router = express.Router();

import logger from "../modules/logger";
import upload from "../modules/fileStorage";
import delFile from "../modules/delFile"

import { heroSectionSchema, HeroSection } from "../Schemes/HeroSection"

/**
 * /api/hero/create
 * Создание страницы ветерана
 *
 * @param {String} sections распарсить в JSON
 * @param {Array} images 
 *
 * @returns { object } 
 */
router.post("/create", upload.array('images'), (req: any, res: any) => {
  try {
    let sections = JSON.parse(req.body.sections)
    let images = req.files
    
    sections.forEach((section: heroSectionSchema) => {
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

    console.log(sections)
    res.send(true)
  } catch (error) {
    console.log(error)
    res.send(false)
  }
});

module.exports = router;