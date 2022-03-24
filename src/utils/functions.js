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

const createDashboardCard = ({ imagem, categoria, descricao, nome, id, preco }) => {
  const card =`
    <ul class="tabel_list_iten" data-id="${id}" data-price="${preco}">
      <ul class="tabel_list_iten_product">
          <li class="tabel_list_iten_pic">
              <img src="${imagem}" alt="pizza">
          </li>
          <li class="tabel_list_iten_name">
              <p>${nome}</p>
          </li>
      </ul>
      <li class="tabel_list_iten_category">
          <p>
              ${categoria}
          </p>
      </li>
      <li class="tabel_list_iten_description">
          <p>
              ${descricao}
          </p>
      </li>
      <li class="tabel_list_iten_action">
          <button class="action_edit" data-edit="${id}"></button>
          <button class="action_delet" data-delete="${id}"></button>
      </li>
    </ul>`

    return card
} 

const createDashboardEdit = ({ nome, imagem, preco, descricao }) => {
  const card =`
  <div class="modal--edit">
  <div class="modal--edit--container">
     <div class="modal--edit--card">
       <div class="modal--edit--card--top">
         <p class="modal--edit--card--title">
           Edição de produto
         </p>
         <button class="modal--edit--card--close">
           x
         </button>
       </div>
       <div class="modal--edit--card--info">
         <form class="modal--edit--form" id="form-edit">
           <label class="modal--edit--form--label" for="nome">
             Nome do Produto
           </label>
             <input value="${nome}" type="text" name="nome" class="modal--edit--form--field">
           <label class="modal--edit--form--label" for="descricao">
             Descrição
           </label>
           <input value="${descricao}" type="text" name="descricao" class="modal--edit--form--field modal--edit--description">
           <label for="edit--selectGroup" class="modal--edit--form--label">
             Categorias
           </label>
           <div class="modal--edit--btnGroup">
             <input type="checkbox" id="edit--panificadora" name="categoria" value="panificadora">
             <label for="edit--panificadora">
               Panificadora
             </label>
             <input type="checkbox" id="edit--frutas" name="categoria" value="frutas">
             <label for="edit--frutas">
               Frutas
             </label>
             <input type="checkbox" id="edit--bebidas" name="categoria" value="bebidas">
             <label for="edit--bebidas">
               Bebidas
             </label>
           </div>
           <label for="preco" class="modal--edit--form--label">
             Valor do Produto
           <input type="text" value="${preco}" name="preco" class="modal--edit--form--field">
           </label>
           <label for="imagem" class="modal--edit--form--label">
             Link da imagem
           </label>
           <input type="text" name="imagem" value="${imagem}" class="modal--edit--form--field">
         </form>
         <div class="modal--edit--buttons">
           <button class="modal--edit--buttons--delete">
             Excluir
           </button>
           <button form="form-edit" class="modal--edit--buttons--save">
             Salvar Alterações
           </button>
         </div>
       </div>
     </div>
  </div>
</div>
  `
  return card
}

export { createCard, createCartCard, createDashboardCard ,createDashboardEdit }