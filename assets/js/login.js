// import { Display } from "./class/display.js";
// import { Api } from "./class/api.js"
import { KenzieFood } from "../../src/utils/KenzieFood.js"


const getUserData = (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const userData = Object.fromEntries(formData.entries())
  
  KenzieFood.login(userData)
}

const formLogin = document.getElementById('form-login')
formLogin.addEventListener('submit', getUserData)


// class App{
//     static register(form){
//         const inputs = form
//         const user  = {}        
//         for (let i = 0; i < inputs.length; i++){
//             const {name, value} = inputs[i]
//             if(name){
//                 user[name] = value
//             }
//             inputs[i].value = ''
//         }
//         this.usuario = Api.postUser(user);
//         Display.changeToLogin();
//     }

//     static login(form){

//         const inputs = form
//         const user  = {}        
//         for (let i = 0; i < inputs.length; i++){
//             const {name, value} = inputs[i]
//             if(name){
//                 user[name] = value
//             }
//         }
//         this.usuario = Api.logarUsuario(user)
//     }
// }
// Display.displayLogin();
// export {App}