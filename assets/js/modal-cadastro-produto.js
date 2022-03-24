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
            const formWrapper = document.querySelector('.form--wrapper');
      
            formWrapper.classList.toggle('hidden');
            
      }

      static closeModal(e){
            const button = e.target.classList;
            
            const arrayButton = Array.from(button)
            console.log(arrayButton)
            for(let i = 0; i < arrayButton.length; i++){

                  if(arrayButton[i] === 'form--wrapper'){
                        button.toggle('hidden')
                        break;
                  }else if(arrayButton[i] === 'form--button'){
                        e.target.closest('.form--wrapper').classList.toggle('hidden')
                  } 

            }          

      }

}


const form = document.querySelector('form')
form.addEventListener('submit', RegisterProducts.formProducts)