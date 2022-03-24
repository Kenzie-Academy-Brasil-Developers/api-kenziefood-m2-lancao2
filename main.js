const section = document.querySelector("section")
import { Cart } from "./src/models/Cart.js";
import { ShowCase } from "./src/models/Showcase.js";
import { KenzieFood } from "./src/utils/KenzieFood.js";

/* ============== Main function ==================*/
(async () => {
  const publicProducts = await KenzieFood.getPublicProducts()
  Cart.createProductsInStorage()

  if (localStorage.getItem('userToken')) {
    const authToken = localStorage.getItem('userToken')
    const privateProducts = await KenzieFood.getPivateProducts(authToken)
    const logoutButton = document.querySelector('.user')
    const loginButton = document.querySelector('.button_login')

    loginButton.classList.toggle('d-none')
    logoutButton.classList.toggle('d-none')

    logoutButton.addEventListener('click', logout)

    ShowCase.showProducts(publicProducts.concat(privateProducts))
    return
  }
  
  ShowCase.showProducts(publicProducts)
})()
/* ============== End main function ==============*/

const openModal = () => {
  const modal = document.getElementById("modal")
  modal.style.display = "block"
}

const closeModal = e => {
  const clickedElement = e.target
  const classesThatClose = ['modal-wrapper', 'close-modal']

  classesThatClose.forEach(clas => {
    const isAClosingClass = [...clickedElement.classList].includes(clas)

    if (isAClosingClass) {
      const modal = document.getElementById("modal")
      modal.style.display = "none"
    }
  })
}
  
const filterProducts = async e => {
  const clickedElement = e.target
  
  if (clickedElement.tagName == 'BUTTON') {
    const products = await KenzieFood.getPublicProducts()
    ShowCase.filterByCategory(clickedElement.name, products)
  }
}

const addToCart = e => {
  const clickedElement = e.target
  const productId = clickedElement.dataset.id
  
  if(productId) {
    const productToAdd = ShowCase.products.find(({ id }) => +id === +productId)
    Cart.addCart(productToAdd)
  }
}

const removeProduct = (event) => {
  const button = event.target;
  if(button.tagName === 'BUTTON' || button.tagName === 'IMG'){
     Cart.removeCart(event)
  }
}

const logout = () => {
  localStorage.clear()
  location.assign('../../src/pages/login.html')
}

const input = document.querySelector('.title--search')
input.addEventListener('keyup', KenzieFood.filterProducts)

const buttonOpenCard = document.getElementById("modalButton")
buttonOpenCard.addEventListener("click", openModal)

const aside = document.querySelector("aside")
aside.addEventListener("click", closeModal)

const categoryButtonsNav = document.querySelector('.nav--top')
categoryButtonsNav.addEventListener('click', filterProducts)

const showCaseContainer = ShowCase.container
showCaseContainer.addEventListener('click', addToCart)

const divProducts = document.querySelector('.container');
divProducts.addEventListener('click', removeProduct);

