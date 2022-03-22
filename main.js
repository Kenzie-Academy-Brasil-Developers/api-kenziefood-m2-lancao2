import { ShowCase } from "./src/models/Showcase.js";

(async () => {
  
  await ShowCase.showProducts()
  console.log(ShowCase.products)

})()
