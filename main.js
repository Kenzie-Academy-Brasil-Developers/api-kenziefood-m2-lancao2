import { ShowCase } from "./src/models/Showcase.js";

(async () => {
  
  await ShowCase.showProducts()
  console.log(ShowCase.products)

})()

document.querySelector(".panificadora") .addEventListener("click", ()=> ShowCase.showCategory(event));
document.querySelector(".frutas") .addEventListener("click", ()=> ShowCase.showCategory(event));
document.querySelector(".bebidas") .addEventListener("click", ()=> ShowCase.showCategory(event));
document.querySelector("#todos") .addEventListener("click", ()=> ShowCase.showAll());