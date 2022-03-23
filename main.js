const section = document.querySelector("section")
import { ShowCase } from "./src/models/Showcase.js";
import { KenzieFood } from "./src/utils/KenzieFood.js";

/* ============== Main function ==================*/
(async () => {
  const products = await KenzieFood.getProducts()
  ShowCase.showProducts(products)
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
  
const input = document.querySelector('.title--search')
input.addEventListener('keyup', KenzieFood.filterProducts)

const buttonOpenCard = document.getElementById("modalButton")
buttonOpenCard.addEventListener("click", openModal)

const aside = document.querySelector("aside")
aside.addEventListener("click", closeModal)