const section = document.querySelector("section")
import { KenzieFood } from "./src/utils/KenzieFood.js";

async function main () {
  const request = await KenzieFood.getProducts()
  //localStorage.setItem("product", JSON.stringify(request))
  console.log(request)
  showcase(request)

  
}

// função que cria as vitrines
function showcase(products){
  section.innerHtml = ""
  products.forEach(element => {
    const div_card = document.createElement("div")
    div_card.className = "card"
    section.appendChild(div_card)
      const div_card_pic = document.createElement("div")
      div_card_pic.className = "card_pic"
      div_card.appendChild(div_card_pic)
        const picture = document.createElement("img")
        picture.src = element.imagem
        div_card_pic.appendChild(picture)
      const div_card_description = document.createElement("div")
      div_card_description.className = "card_description"
      div_card.appendChild(div_card_description)
        const product_name = document.createElement("h2")
        product_name.innerText = element.nome
        div_card_description.appendChild(product_name)
        const product_description = document.createElement("p")
        product_description.innerText = element.descricao
        div_card_description.appendChild(product_description)
        const div_card_description_category = document.createElement("div")
        div_card_description_category.className = "card_description_category"
        div_card_description.appendChild(div_card_description_category)
          const product_category = document.createElement("span")
          product_category.innerText = element.categoria
          div_card_description_category.appendChild(product_category)
        const div_card_description_footer = document.createElement("div")
        div_card_description_footer.className = "card_description_footer"
        div_card_description.appendChild(div_card_description_footer)
          const product_value = document.createElement("h4")
          product_value.innerText = `R$ ${element.preco}`
          div_card_description_footer.appendChild(product_value)
          const  buy_button = document.createElement("button")
          div_card_description_footer.appendChild(buy_button)  
  });

}
main()