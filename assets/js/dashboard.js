import { KenzieFood } from "../../src/utils/KenzieFood.js";
import { Dashboard } from "../../src/models/Dashboard.js"

(async () => {
  const authToken = localStorage.getItem('userToken')
  const products = await KenzieFood.getPivateProducts(authToken)

  const informationDiv = document.querySelector('.emailSection')
  const userEmail = JSON.parse(localStorage.getItem('userData')).email

  informationDiv.textContent = userEmail
  Dashboard.showProducts(products)
})()

const logout = () => {
  localStorage.clear()
  location.assign('../../src/pages/login.html')
}

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

