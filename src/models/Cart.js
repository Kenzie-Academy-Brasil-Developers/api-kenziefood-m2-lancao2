import { createCartCard } from "../utils/functions.js"

export class Cart {
  static products = []
  static container = document.querySelector('.container')

  static async addCart(product){

    Cart.products.push(product)
    Cart.container.innerHTML += createCartCard(product)
  }

  static async removeCart(event){
      const button = event.target;
      
      const div = button.closest('.card--cart');
      const product = ShowCase.cartProducts.find((el) => {
        return el.id == div.dataset.id
      })
      
      const index = ShowCase.cartProducts.indexOf(product);

      ShowCase.cartProducts.splice(index, 1);

      div.remove();
  }
}