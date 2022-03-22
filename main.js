import { KenzieFood } from "./src/utils/KenzieFood.js";

(async function main () {
  const products = await KenzieFood.getProducts()  
      
  
  const input = document.querySelector('.title--search')
  input.addEventListener('keyup', (event) => {
    KenzieFood.filterProducts(event, products)
  })
  
  console.log(products)
})()