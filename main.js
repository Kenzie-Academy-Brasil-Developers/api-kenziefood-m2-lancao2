import { KenzieFood } from "./src/utils/KenzieFood.js";

(async function main () {
  const products = await KenzieFood.getProducts()  
    
  console.log(products)
})()