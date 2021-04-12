const { encrypt, decrypt } = require("../../modules/cryptor")
const generator = require('generate-password');

describe('Функция шифрования', () => {
    test('Шифрование и дешифровка', () => {
        let tests = true

        for (let i = 0; i < 100; i++) {
            let test_str = generator.generate({
                length: 30,
                numbers: true
            })

            test_str = tests && decrypt(encrypt(test_str)) == test_str
        }

        expect(tests).toBe(true)
    });
});
