import { KenzieFood } from "../utils/KenzieFood.js"

export class ShowCase {
    constructor (container) {
      this.container = container
      this.products = []
    }

    async showProducts () {
      const products = await KenzieFood.getProducts()
      this.products = products

      
    }
}