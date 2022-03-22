import { KenzieFood } from "../utils/KenzieFood.js"
import { createCard } from "../utils/functions.js"

export class ShowCase {
    static container = document.querySelector('.products-container')
    static products = []
   
    static async showProducts () {
      const products = await KenzieFood.getProducts()
      ShowCase.products = products

      this.products.forEach(product => {
        ShowCase.container.innerHTML += createCard(product)
      })
    }
}