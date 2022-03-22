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

    static login(event){
        const inputs = form
        const dataForm  = {}        
        for (let i = 0; i < inputs.length; i++){
            const {name, value} = inputs[i]
            if(name){
                dataForm[name] = value
            }
            inputs[i].value = ''
        }
        this.usuario = User.logarUsuario(dataForm)
    }

}

export {App}

Display.displayLogin();