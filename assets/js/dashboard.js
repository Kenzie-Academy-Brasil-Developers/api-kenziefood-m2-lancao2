import { KenzieFood } from "../../src/utils/KenzieFood.js";
import { Dashboard } from "../../src/models/Dashboard.js"

(async () => {
  const authToken = localStorage.getItem('userToken')
  const products = await KenzieFood.getPivateProducts(authToken)
 
  Dashboard.showProducts(products)
})()

const button_logout = document.querySelector(".user")
button_logout.addEventListener("click" , () =>{
  
})