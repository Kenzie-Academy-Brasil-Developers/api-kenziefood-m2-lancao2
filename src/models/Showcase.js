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
    let button = document.createElement("button")
    button.classList.add("error--login--button")
    button.innerText = "X"
    div.classList.add("error--div--login")
    let divtext = document.createElement("div")
    divtext.classList.add("error--div--login--text")
    let errorMessage = document.createElement("p")
    errorMessage.classList.add("error--text--login")
    let errorType = document.createElement("p")
    errorType.classList.add("error--text--login")
    errorType.innerText = error
    errorMessage.innerText = `Não foi possível fazer login.`
    div.appendChild(divtext)
    divtext.appendChild(errorMessage)
    divtext.appendChild(button)
    div.appendChild(errorType)
    document.body.appendChild(div)
    button.addEventListener("click", ()=> document.body.removeChild(div))
  }
}