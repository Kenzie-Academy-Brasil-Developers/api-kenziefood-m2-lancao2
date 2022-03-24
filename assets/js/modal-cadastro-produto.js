export class RegisterProducts{
      static openModal = true;

      static async formProducts(e){
            e.preventDefault()

            const form = e.target

            const formData = new FormData(form)
           
            const productData = Object.fromEntries(formData.entries())

            productData.preco = Number(productData.preco)

            form.reset()
            
            return productData        
      }

      static showModal(e){
            console.log(e.target)
            const form = document.querySelector('#open--modal');
            if(RegisterProducts.openModal){
                  form.classList.remove('hidden');
                  RegisterProducts.openModal = false;
            }else{
                  form.classList.add('hidden');
                  RegisterProducts.openModal = true;
            }
      }

}


const form = document.querySelector('form')
form.addEventListener('submit', RegisterProducts.formProducts)