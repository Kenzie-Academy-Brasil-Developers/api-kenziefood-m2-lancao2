export const KenzieFood = class {
  static async getProducts () {
    return (await fetch('https://kenzie-food-api.herokuapp.com/products')).json()
  }

  static async filterProducts(event, data){
        const section = document.querySelector('main section');
        
        const products = data.filter((el) => {
           return el.nome.toLowerCase().includes(event.target.value.toLowerCase())
        })
        console.log(event.target.value)
        section.innerHTML = "";
        console.log(products)
        // Vitrine.template(products)
  }

  static async addCart(event, data){
    const cart = document.querySelector('.container');

    const products = data.find((el) =>{
      
    })

    console.log(cart)
  }

}