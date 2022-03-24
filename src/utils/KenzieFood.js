import { ShowCase } from "../models/Showcase.js"

export const KenzieFood = class {
  static url = "https://kenzie-food-api.herokuapp.com/auth/"

  static async getPublicProducts () {
    return (await fetch('https://kenzie-food-api.herokuapp.com/products')).json()
  }

  static async getPivateProducts(authToken) {
    const url = 'https://kenzie-food-api.herokuapp.com/my/products'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${authToken}`
      },
    })
      .then(response => response.json())
      .catch(error => error)

    if (response.error) {
      return console.log(response.error)
    }
    return response
  }

  static async filterProducts(event) {
    const data = await KenzieFood.getPublicProducts()
    const products = data.filter(el => {
        return el.nome.toLowerCase().includes(event.target.value.toLowerCase())
    })
    ShowCase.showProducts(products)
  }

  static async login (userData) {
    const response = await fetch(`${KenzieFood.url}login`, {
      "method": "POST",
      "headers": {
          "Content-Type" : "application/json"
      },
      "body":JSON.stringify(userData)
    })
      .then(response => response.json())
      .catch(error => error)

    if (response.error) {
      ShowCase.modalErrorLogin(response.error)
    } else {
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('userToken', response)
    location.assign('../pages/dashboard.html')
    }
  }

  static createProduct () {
    
  }

  static async deleteProduct () {

  }

  static async userRegister(object){
    const response = await fetch(`${KenzieFood.url}register`, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(object)
    })
      .then(response => response.json())
      .catch(error => error)

    if (response.error) {
      return console.log(response.error)
    }
    location.assign('./login.html')
  }
}