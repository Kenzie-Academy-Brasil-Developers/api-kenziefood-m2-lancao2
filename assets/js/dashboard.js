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
const logoutButton = document.querySelector('#logout-button')
logoutButton.addEventListener('click', logout)