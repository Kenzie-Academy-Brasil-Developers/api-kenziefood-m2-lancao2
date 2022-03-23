import { Display } from "./class/display.js";
import { Api } from "./class/api.js"

class App{
    static register(form){
        const inputs = form
        const user  = {}        
        for (let i = 0; i < inputs.length; i++){
            const {name, value} = inputs[i]
            if(name){
                user[name] = value
            }
            inputs[i].value = ''
        }
        this.usuario = Api.postUser(user);
        Display.changeToLogin();
    }

    static login(form){

        const inputs = form
        const user  = {}        
        for (let i = 0; i < inputs.length; i++){
            const {name, value} = inputs[i]
            if(name){
                user[name] = value
            }
        }
        this.usuario = Api.logarUsuario(user)
    }
}
Display.displayLogin();
export {App}