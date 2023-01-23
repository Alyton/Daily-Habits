// formulário em uma variável
const form = document.querySelector("form")
// variável para iniciar a biblioteca
// criando um novo objeto
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  // adciona a data atual
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // const today = "24/01"
  const dayExist = nlwSetup.dayExists(today)

  if (dayExist) {
    // alert("Dia já registrado!")
    return
  }

  // alert("Registrado com sucesso.")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("DayleProject@habits", JSON.stringify(nlwSetup.data))
}

// objeto
// const data = {
//   run: ['01-01', '01-02', '01-03'],
//   pills: ['10-01', '10-02', '15-02'],
//   water: ['03-04']
// }

const data = JSON.parse(localStorage.getItem("DayleProject@habits")) || {}
// setData espera um objeto
nlwSetup.setData(data)
nlwSetup.load()


// Popup//

const buttonForPopup = document.querySelector("button")
const popup = document.querySelector(".popup-wrapper")

buttonForPopup.addEventListener("click", () => {
  popup.style.display = "flex"
})

popup.addEventListener("click", () => {
  const classNameOfClickedElement = event.target.classList[0]
  const className = ["popup-close", "popup-link", "popup-wrapper"]
  const shouldCLosePopup = className.some(className => className === classNameOfClickedElement)

  if (shouldCLosePopup) {
    popup.style.display = "none"
  }
})
