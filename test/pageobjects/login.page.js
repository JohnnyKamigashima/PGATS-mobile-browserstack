import { $ } from '@wdio/globals'
import ProductsPage from './products.page.js'

export default class LoginPage {

    get user() { return $('android=new UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(0)') }
    get password() { return $('//android.view.View[@text="Senha"]/../android.widget.EditText') }
    get enterButton() { return $('android=new UiSelector().text("ENTRAR")') }

    async cliclEnterButton() {
        await this.enterButton.click()
    }

    async fillUser(usuario) {
        await this.user.setValue(usuario)
    }

    async fillPassword(senha) {
        await this.password.setValue(senha)
    }

    async loginLojinha(usuario, senha) {
        await Promise.all([
            this.fillUser(usuario),
            this.fillPassword(senha)
        ])
        await this.cliclEnterButton()
        return new ProductsPage()
    }
}