const getNewUserData = e => {
  e.preventDefault()

  const form = new FormData(e.target)

}

const form = document.querySelector('.form-container')
form.addEventListener('submit', getNewUserData)