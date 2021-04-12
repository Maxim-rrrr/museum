import express from "express";
const router = express.Router();

import config from "config";
import logger from "../modules/logger";
import { encrypt, decrypt } from "../modules/cryptor";

/**
 * /api/admin/login
 * Авторизация
 *
 * @param {string} login
 * @param {string} pass
 *
 * @returns { object } {status: 200, token} || {status, message}
 */
router.post("/login", (req: any, res: any) => {
  if (
    req.body.login === config.get("admin_login") && 
    req.body.pass === config.get("admin_pass")
  ) {
    logger.info("Вход в админку")
    res.send({ status: 200, token: encrypt(req.body.login) })
  } else {
    res.send({ status: 400, message: "Неверный логин или пароль" })
  }
});

/**
 * /api/admin/is_admin
 * Провекра админского токена
 *
 * @param {string} token
 *
 * @returns { boolean } 
 */
router.post("/is-admin", (req: any, res: any) => {
  if (req.body.token) {
    decrypt(req.body.token) == config.get("admin_login") ? res.send({ status: 200 }) : res.send({ status: 400, message: "Неверный админский токен" })
  } else {
    res.send({ status: 400, message: "Пустой токен" })
  }
})

module.exports = router;