import LoginPage from "../pageobjects/login.page.js"

const user = process.env.LOJINHA_APP_USER
const password = process.env.LOJINHA_APP_PASS

describe('Acessa lojinha app android', () => {
    it('[CT-001] - Login na lojinha', async () => {

        const loginPage = new LoginPage()

        await (
            await loginPage
                .loginLojinha(user, password))
            .checkLogin('Lista de Produtos')
    })
})