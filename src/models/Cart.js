import { createCartCard } from "../utils/functions.js"
import { ShowCase } from "./Showcase.js"

export class Cart {
  static products   = []
  static amount     = document.querySelector('.container--total span')
  static container  = document.querySelector('.container')
  static price      = document.querySelector('.value_total span')

  static async addCart(product){
    Cart.products.push(product)
    Cart.container.innerHTML += createCartCard(product)

    const buttons = document.querySelectorAll(`.card--remove button`)
    Array.from(buttons).forEach(button =>
       button.addEventListener('click', Cart.removeCart))

    Cart.sumProducts(product.preco)
  }

  static async removeCart(event){
    const button = event.target;
    const card = button.closest('.card--cart');        

    const product = Cart.products.find((el) => {
      return el.id == card.dataset.id
    })
    
    const index = Cart.products.indexOf(product);
    Cart.products.splice(index, 1);
    Cart.subProducts(product.preco)

    card.remove();
  }

  static async sumProducts(priceProduct){
    const currentTotal = +Cart.price.innerText

    Cart.amount.innerText = Cart.products.length
    Cart.price.innerText = currentTotal + priceProduct
  }

  static subProducts(priceProduct){
    const currentTotal = +Cart.price.innerText

    Cart.amount.innerText = Cart.products.length
    Cart.price.innerText = currentTotal - priceProduct
  }
}