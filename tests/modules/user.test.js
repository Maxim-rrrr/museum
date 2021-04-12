const createUser = require("../../modules/user/createUser")

// Ктобы знал почему оно не работает...
describe('Работа с пользователем', () => {
    test('Создание', async () => {
        let result = await createUser('test@test', '123', '123123')

        expect(result.email).toBe('test@test')
        expect(result.balance).toBe(0)
        expect(result.inviting).toBe('123123')
        expect(result.orders).toBe([])
        expect(result.summa).toBe(0)
    });
});

