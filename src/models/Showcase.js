import { KenzieFood } from "../utils/KenzieFood.js"
import { createCard } from "../utils/functions.js"

export class ShowCase {
    constructor (container) {
      this.container = container
      this.products = []
    }

    async showProducts () {
      const products = await KenzieFood.getProducts()
      this.products = products

      this.products.forEach(product => {
        this.container.innerHTML += createCard(product)
        console.log(this.container)
      })
    }
}