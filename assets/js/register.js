import { KenzieFood } from "../../src/utils/KenzieFood.js"

const getNewUserData = e => {
  e.preventDefault()

  const form = new FormData(e.target)
  const userData = Object.fromEntries(form.entries())
  
  KenzieFood.userRegister(userData)
}

const form = document.querySelector('.form-container')
form.addEventListener('submit', getNewUserData)