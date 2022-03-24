import { createDashboardCard } from "../utils/functions.js"
import { createDasboardEdit } from "../utils/functions.js"

export class Dashboard {
  static container = document.querySelector('.tabel_list')
  static products = []

  static async showProducts (products) {
    console.log(products)
    Dashboard.products = products
    
    Dashboard.products.forEach(product => {
      Dashboard.container.innerHTML += createDashboardCard(product)
    })
  }

  static async addProduct (e) {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    const productData = Object.fromEntries(formData.entries())
    const authToken = localStorage.getItem('userToken')

    const response = await fetch('https://kenzie-food-api.herokuapp.com/my/products', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
      body: JSON.stringify(productData)
    })
      .then(response => response.json())
      .catch(error => error)

    console.log(response)
  }

  static async deleteProduct () {
    const form = e.target
    const formData = new FormData(form)
    const productData = Object.fromEntries(formData.entries())
    const authToken = localStorage.getItem('userToken')

    const response = await fetch('https://kenzie-food-api.herokuapp.com/my/products', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
      body: JSON.stringify(productData)
    })
      .then(response => response.json())
      .catch(error => error)

    console.log(response)
  }
  static createModalEdit(id){
    const product = this.products.find(element => element.id == id)
    createDasboardEdit(product)

  }
}

const openModalEdit = e =>{
  const clickedElement = e.target
  const productId = clickedElement.dataset.edit
    if (clickedElement.className == "action_edit"){
    Dashboard.createModalEdit(productId)
  }
}

const listProducts = document.querySelector(".tabel_list")
listProducts.addEventListener('click', openModalEdit);