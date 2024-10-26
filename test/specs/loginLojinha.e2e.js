import LoginPage from "../pageobjects/login.page.js"

const user = process.env.LOJINHA_APP_USER
const password = process.env.LOJINHA_APP_PASS

describe('Acessa lojinha app android', () => {
    it('[CT-001] - Login na lojinha', async () => {

        const loginPage = new LoginPage()

        console.log(`insformações de login: ${user}, ${password}, e de browserstack app: ${process.env.BS_APP}, ${process.env.BS_USERNAME}, ${process.env.BS_ACCESS_KEY}`)

        await (
            await loginPage
                .loginLojinha(user, password))
            .checkLogin('Lista de Produtos')
    })
})