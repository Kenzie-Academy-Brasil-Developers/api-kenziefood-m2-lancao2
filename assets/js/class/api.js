class Api {

    static url = "https://kenzie-food-api.herokuapp.com/auth/"

    static async postUser(object){
        let response = await fetch(`${this.url}register`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body":JSON.stringify(object)
        })
        return response
    }
    static async logarUsuario(object){
        const response = await fetch(`${this.url}login`, {
            "method": "POST",
            "headers": {
                "Content-Type" : "application/json"
            },
            "body":JSON.stringify(object)
        })
        const responseData = await response.json()
        localStorage.setItem("user_session", responseData)
    }
}

export {Api}