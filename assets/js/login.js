import { KenzieFood } from "../../src/utils/KenzieFood.js"


const getUserData = (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const userData = Object.fromEntries(formData.entries())
  
  KenzieFood.login(userData)
}

const formLogin = document.getElementById('form-login')
formLogin.addEventListener('submit', getUserData)
