import { createCard } from "../utils/functions.js"

export class ShowCase {
    static container = document.querySelector('.products-container')
    static products = []

    static async showProducts (products) {
      ShowCase.products = products
      ShowCase.container.innerHTML = ''

      products.forEach(product => {
        ShowCase.container.innerHTML += createCard(product)
      })
    }
}