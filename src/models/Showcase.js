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

    static erasecontainer(){
      ShowCase.container.innerHTML = ""
    }
  
    static showCategory(event){
      const category = event.target.name
      this.erasecontainer();
      this.products.forEach(function(product){
        if (product.categoria == category){
          ShowCase.container.innerHTML += createCard(product)
        }
      })
    }
  
    static showAll(){
      this.erasecontainer();
      this.showProducts();
    }
    
}