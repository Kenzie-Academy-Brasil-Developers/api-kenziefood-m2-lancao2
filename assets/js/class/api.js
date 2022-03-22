class Api {
    static async postUser(object){
    let url = "https://kenzie-food-api.herokuapp.com/auth/register"
    let response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(object)
    })
    console.log(response.status)
    return response
    }
}

export {Api}