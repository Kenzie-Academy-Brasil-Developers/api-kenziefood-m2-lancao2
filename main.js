import { KenzieFood } from "./src/utils/KenzieFood.js";
import { ShowCase } from "./src/models/Showcase.js";

(async function main () {

  const container = document.querySelector('.products-container')
  const products = KenzieFood.getProducts()
  const showCase = new ShowCase(container, products)

  showCase.showProducts()
  
  // const input = document.querySelector('.title--search')
  // input.addEventListener('keyup', (event) => {
  //   KenzieFood.filterProducts(event, products)
  // })
  
})()