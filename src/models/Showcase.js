import { createCard, createCartCard } from "../utils/functions.js"
import { KenzieFood } from "../utils/KenzieFood.js"

export class ShowCase {
    static container = document.querySelector('.products-container')
    static products = []
    static cartProducts = []

    static clearShowcase () {
      ShowCase.container.innerHTML = ''
    }

    static async showProducts (products) {
      ShowCase.clearShowcase()
      ShowCase.products = products
      
      products.forEach(product => {
        ShowCase.container.innerHTML += createCard(product)
      })
      
      const buttons = document.querySelectorAll(`.card_description_footer button`)
      
      for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', ShowCase.addCart)
      }
    }

    static async filterByCategory(category, products){
      if (!category) {
        return ShowCase.showProducts(products)
      }

      const filteredProducts = products.filter(product => {
        return product.categoria === category
      })
      ShowCase.showProducts(filteredProducts)
    }

    static async addCart(event){
      const data = await KenzieFood.getProducts();
      const cart = document.querySelector('.container');    
      const card = event.target.closest('.card');
    
      const product = data.find((el) => {
        return el.id == card.dataset.id 
      })
      
      ShowCase.cartProducts.push(product)
      cart.innerHTML += createCartCard(product)
      
      const buttons = document.querySelectorAll(`.card--remove button`)
      for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', ShowCase.removeCart)
      }
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