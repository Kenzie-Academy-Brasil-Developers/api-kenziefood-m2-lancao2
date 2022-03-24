import { KenzieFood } from "../../src/utils/KenzieFood.js";
import { Dashboard } from "../../src/models/Dashboard.js"
import { RegisterProducts } from "/assets/js/modal-cadastro-produto.js"

(async () => {
  const authToken = localStorage.getItem('userToken')
  const products = await KenzieFood.getPivateProducts(authToken)

  const informationDiv = document.querySelector('.emailSection')
  const userEmail = JSON.parse(localStorage.getItem('userData')).email

  informationDiv.textContent = userEmail
  Dashboard.showProducts(products)

  const modalPage = await fetch('../../src/pages/modal-cadastro-produto.html')
    .then(response => response.text())

  const body = document.body
  // body.innerHTML = modalPage

})()

const logout = () => {
  localStorage.clear()
  location.assign('../../src/pages/login.html')
}

const logoutButton = document.querySelector('#logout-button')
logoutButton.addEventListener('click', logout)


let click = 0 
const popup_logout = document.querySelector(".pop-up_logout")
const userButton = document.querySelector('.user')
userButton.addEventListener("click" , () =>{
  if(click === 0){
    popup_logout.style.display = "block"
  click = 1
  }
  else if(click === 1){
    popup_logout.style.display = "none"
    click = 0
  }
})


const buttonAddProduct = document.querySelector('.btnAddNew');
console.log(buttonAddProduct)
buttonAddProduct.addEventListener('click', RegisterProducts.showModal)