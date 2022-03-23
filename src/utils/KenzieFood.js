import { ShowCase } from "../models/Showcase.js"

export const KenzieFood = class {
  static url = "https://kenzie-food-api.herokuapp.com/auth/"

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

  static async postUser(object){
      let response = await fetch(`${KenzieFood.url}register`, {
          "method": "POST",
          "headers": {
              "Content-Type": "application/json"
          },
          "body":JSON.stringify(object)
      })
      return response
  }

  static async login (userData){
    
    const response = await fetch(`${KenzieFood.url}login`, {
      "method": "POST",
      "headers": {
          "Content-Type" : "application/json"
      },
      "body":JSON.stringify(userData)
  })
    .then(response => response.ok 
      ? response.json() 
      : (() => {throw new Error(response.json())})())
    .catch(error => console.log(error))

    console.log(response)
    // localStorage.setItem("user_session", responseData)
  }
}