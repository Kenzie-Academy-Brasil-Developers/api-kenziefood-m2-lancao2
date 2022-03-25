import { createDashboardCard } from "../utils/functions.js"
import { KenzieFood } from "./../utils/KenzieFood.js"

export class Dashboard {
  static container = document.querySelector('.tabel_list')
  static products = []
  static modalEditDelete = document.querySelector(".modal--edit--card--close")
  
  static async showProducts (products) {
    console.log(products)
    this.container.addEventListener("click", openModalEdit);
    this.modalEditDelete.addEventListener("click", ()=> this.toogleModalEdit())
    Dashboard.products = products
    Dashboard.products.forEach(product => {
      Dashboard.container.innerHTML += createDashboardCard(product)
      
    })
  }

  static resetContainer(){
    this.container.innerHTML = ""
    this.showProducts(this.products)
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

  static toogleModalEdit(){
    document.querySelector(".modal--edit").classList.toggle("hidden");
  }

  static createModalEdit(id){
    this.toogleModalEdit()
    const product = this.products.find(element => element.id == id)
    const { imagem, descricao, nome, preco } = product
    document.querySelector("#edit--name").setAttribute("value", nome)
    document.querySelector("#edit--descricao").setAttribute("value", descricao)
    document.querySelector("#edit--preco").setAttribute("value", preco)
    document.querySelector("#edit--imagem").setAttribute("value", imagem)
    const formEdit = document.querySelector(".modal--edit--form")
    formEdit.addEventListener("submit", (event)=> getEditData(event,id))
  }
}

function getEditData(e,id) {
  e.preventDefault()
  const form = new FormData(e.target)
  const productEditData = Object.fromEntries(form.entries())
  console.log(productEditData)
  KenzieFood.editProduct(productEditData,id)  
}

const openModalEdit = e =>{
  console.log("chamou")
  const clickedElement = e.target
  const productId = clickedElement.dataset.edit
    if (clickedElement.className == "action_edit"){
      Dashboard.createModalEdit(productId)
  }
}