import { KenzieFood } from "../../src/utils/KenzieFood.js";

(async () => {
  const authToken = localStorage.getItem('userToken')
  await KenzieFood.getPivateProducts(authToken)
})()
