class RegisterProducts{
      static async formProducts(e){
            e.preventDefault()

            const form = e.target

            const formData = new FormData(form)
           
            const productData = Object.fromEntries(formData.entries())

            productData.preco = Number(productData.preco)

            form.reset()
            
            return productData        
      }

}


const form = document.querySelector('form')
form.addEventListener('submit', RegisterProducts.formProducts)