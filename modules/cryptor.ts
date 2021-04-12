import CryptoJS from "crypto-js";
import config from "config";

/**
 * Функция шифрования
 *
 * @param {string} text 
 * 
 * @returns { string }
 */
export const encrypt = (text: string): string => {
    text = text.toString()
    return CryptoJS.AES.encrypt(text, config.get("crypto_key")).toString();
}

/**
 * Функция дешифровки
 *
 * @param {string} hash 
 * 
 * @returns { string }
 */
export const decrypt = (hash: string): string => {
    hash = hash.toString()
    return CryptoJS.AES.decrypt(hash, config.get("crypto_key")).toString(CryptoJS.enc.Utf8);
}
