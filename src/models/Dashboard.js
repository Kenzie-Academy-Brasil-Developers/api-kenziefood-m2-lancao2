import { createDashboardCard } from "../utils/functions.js"

export class Dashboard {
  static container = document.querySelector('.tabel_list')
  static products = []

  static async showProducts (products) {
    console.log(products)
    Dashboard.products = products
    
    Dashboard.products.forEach(product => {
      Dashboard.container.innerHTML += createDashboardCard(product)
    
    })
    const modalDeletClose = document.querySelector(".close_delet")
    modalDeletClose.addEventListener("click" , () =>{
      modalDelet.style.display = "none"
    })
    // abrir modal deletar produto 
    const aceptDelete = document.querySelector(".actionDeletButton")
    const recuseDelete = document.querySelector(".actionNotDeletButton")
    const modalDelet = document.querySelector(".modalDelet")
    const actionDeletopen = document.querySelector(".tabel_list")
    //for(let i = 0; actionDeletopen.length; i++){
      actionDeletopen/*[i]*/.addEventListener("click" , (event) =>{
      
      const intenSelected = event.target
      if(intenSelected.tagName === "BUTTON"){
        if(intenSelected.dataset.delete){
          modalDelet.style.display = "flex"
          aceptDelete.addEventListener("click", () =>{
            Dashboard.deleteProduct(intenSelected.dataset.delete)
          })
          recuseDelete.addEventListener("click" , () =>{
            modalDelet.style.display = "none"
          })

        }
      }
      
      
      })
    //}
    
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

  static async deleteProduct(id) {
    const url = `https://kenzie-food-api.herokuapp.com/my/products/${id}`
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("userToken")}`
      }
    })
    Dashboard.showProducts(products)
  }

}