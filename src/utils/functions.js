function createCard ({ id, nome, categoria, imagem, preco, descricao }) {
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
          <h4>${preco}</h4>
          <button>
            <span> </span>
          </button>
        </div>
      </div>
    </div> `

    return cardTemplade
}

export { createCard }