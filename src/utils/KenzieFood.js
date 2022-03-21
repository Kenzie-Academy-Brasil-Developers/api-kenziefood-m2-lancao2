export const KenzieFood = class {
  static async getProducts () {
    return (await fetch('https://kenzie-food-api.herokuapp.com/products')).json()
  }
}