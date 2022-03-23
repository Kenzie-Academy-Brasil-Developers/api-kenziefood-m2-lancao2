const section = document.querySelector("section")
import { ShowCase } from "./src/models/Showcase.js";
import { KenzieFood } from "./src/utils/KenzieFood.js";


(async () => {
  const products = await KenzieFood.getProducts()
  ShowCase.showProducts(products)
})()

  
const input = document.querySelector('.title--search')
input.addEventListener('keyup', KenzieFood.filterProducts)

// função de criar e fechar modal na versao mobile

const buttonOpenCard = document.getElementById("modalButton")
buttonOpenCard.addEventListener("click", () =>{
  const modal = document.getElementById("modal")
  modal.style.display = "block"
} )

const conteinerCart = document.querySelector(".conteiner_aside")
const aside = document.querySelector("aside")
aside.addEventListener("click", event => {
  // fazer função para fechar o modal
  
})
// ======= fim da função criar e fechar modal na versao mobile