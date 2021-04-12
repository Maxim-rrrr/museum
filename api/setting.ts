import express from "express";
const router = express.Router();

import config from "config";
import logger from "../modules/logger";
import { encrypt, decrypt } from "../modules/cryptor";
import { Setting, settingSchema } from "../Schemes/Setting"
import upload from "../modules/fileStorage";
import delFile from "../modules/delFile"

/**
 * /api/setting/get
 * Получение настроек
 *
 *
 * @returns { object } 
 */
router.post("/get", (req: any, res: any) => {

  Setting.find({}).then(settings => {
    let result = {}
     
    settings.forEach(setting => {
      result = {...result, [setting.type]: setting.value}
    })

    res.send(result)
  })

});


/**
 * /api/setting/set
 * Изменение настроек
 *
 * @param {string} token админский токен
 * @param {Array} data 
 *
 * @returns { object } {status: 200, token} || {status, message}
 */
router.post("/set", upload.single('partnerCard'), async (req: any, res: any) => {
  if (decrypt(req.body.token) !== config.get("admin_login")) {
    res.send({ status: 400, message: "Неверный токен админа" })
    logger.info("Попытка отправки запроса /api/setting/set с неверным токеном админа")
    return
  }


  type dataRequest = Array<settingSchema>

  async function update (data: dataRequest) {
    data.forEach(async (elem) => {
      let setting: settingSchema | null = await Setting.findOne({ type: elem.type })

      if (setting) {
        let _id = setting._id
        await Setting.updateOne({ _id }, { value: elem.value }).then()
      } else {
        await Setting.create(elem).then()
      }
    })
  }

  async function updatePartnerCard(partnerCard: string) {
    let setting: settingSchema | null = await Setting.findOne({ type: "partnerCard" })
  
    if (setting) {
      let _id = setting._id
      await Setting.updateOne({ _id }, { value: partnerCard }).then()
    } else {
      await Setting.create({
        type: "partnerCard",
        value: partnerCard
      }).then()
    }
  }

  try {
    let data: dataRequest = JSON.parse(req.body.data)

    await update(data)


    if (req.file) {
      await updatePartnerCard(req.file.filename)
    }
    
    await Setting.find({}).then(settings => {
      res.send({ status: 200, settings })
    })
  } catch (e) {
    res.send({ status: 400, message: e })
  }
  
});

module.exports = router;