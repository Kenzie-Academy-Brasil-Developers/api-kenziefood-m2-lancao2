const convertToBRL = value => 
  value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

const createCard =  ({ id, nome, categoria, imagem, preco, descricao }) => {
  const cardTemplade = `
    <div class="card" data-id="${id}">
      <div class="card_pic">
        <img src="${imagem}">
      </div>
      <div class="card_description">
        <h2>${nome}</h2>
        <p>${descricao}</p>
        <div class="card_description_category">
          <span>${categoria}</span>
        </div>
        <div class="card_description_footer">
          <h4>${convertToBRL(preco)}</h4>
          <button data-id="${id}">
            <span> </span>
          </button>
        </div>
      </div>
    </div> `
    return cardTemplade
}

const createCartCard = ({ id, nome, categoria, imagem, preco }) => {
  const card = `
          <div class="card--cart" data-id="${id}">
            <div class="card--image">
              <img src="${imagem}" alt="">
            </div>
            <div class="card--infos">
              <p>${nome}</p>
              <span>${categoria}</span>
              <span class="infos--price">${convertToBRL(preco)}</span>
            </div>
            <div class="card--remove">
              <button><img src="./src/icons/icon_trash.png" alt=""></button>
            </div>
          </div>`

  return card
}

export { createCard, createCartCard }