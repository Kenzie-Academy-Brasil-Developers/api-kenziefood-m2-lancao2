import { createCard } from "../utils/functions.js"

export class ShowCase {
    static container = document.querySelector('.products-container')
    static products = []

    static clearShowcase () {
      ShowCase.container.innerHTML = ''
    }

    static async showProducts (products) {
      ShowCase.clearShowcase()
      ShowCase.products = products
      
      products.forEach(product => {
        ShowCase.container.innerHTML += createCard(product)
      })
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

  static modalErrorLogin(error){
    let div = document.createElement("div")
    div.classList.add("error--div")
    let errorMessage = document.createElement("p")
    errorMessage.classList.add("error--text")
    let errorType = document.createElement("p")
    errorType.classList.add("error--text")
    errorType.innerText = error
    errorMessage.innerText = `Não foi possível fazer login.`
    div.appendChild(errorMessage)
    div.appendChild(errorType)
    document.body.appendChild(div)
    window.addEventListener("keydown", ()=> document.body.removeChild(div),{once : true})
  }
}