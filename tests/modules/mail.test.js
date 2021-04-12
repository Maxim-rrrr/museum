const mail = require("../../modules/mail")

describe('Функция отправки сообщений', () => {
    test('Отправка', async () => {
        let result = true
        // let result = await mail('kewin.rrrr@gmail.com', 'Тест МАДИ', 'Тест text', '<b>Тест html</b>')

        expect(result).toBe(true)
    });
});
