import { KenzieFood } from "./src/utils/KenzieFood.js";
import { ShowCase } from "./src/models/Showcase.js";

(async function main () {
  
  // const input = document.querySelector('.title--search')
  // input.addEventListener('keyup', (event) => {
  //   KenzieFood.filterProducts(event, products)
  // })
  
  const showCase = new ShowCase('a')
  showCase.showProducts()

})()