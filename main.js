import { ShowCase } from "./src/models/Showcase.js";
import { KenzieFood } from "./src/utils/KenzieFood.js";


(async () => {
  const products = await KenzieFood.getProducts()
  ShowCase.showProducts(products)
})()

  
const input = document.querySelector('.title--search')
input.addEventListener('keyup', KenzieFood.filterProducts)