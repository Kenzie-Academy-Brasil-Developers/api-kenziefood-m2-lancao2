import { ShowCase } from "../models/Showcase.js"

export const KenzieFood = class {
  static cartProducts = [];

  static async getProducts () {
    return (await fetch('https://kenzie-food-api.herokuapp.com/products')).json()
  }

  static async filterProducts(event) {
      const data = await KenzieFood.getProducts()
      const products = data.filter(el => {
          return el.nome.toLowerCase().includes(event.target.value.toLowerCase())
      })
      
      ShowCase.showProducts(products)
  }
}