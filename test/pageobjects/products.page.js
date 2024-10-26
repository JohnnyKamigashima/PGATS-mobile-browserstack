import { $ } from '@wdio/globals'

export default class ProductsPage {

    get productList() { return $('android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")') }

    async getProductList() {
        return await this.productList.getText()
    }

    async checkLogin(mensagem) {
        expect(await this.getProductList()).toEqual(mensagem)
    }
}