
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__witness")

export const WitnessButton = () => {
  contentTarget.innerHTML = `
      <button id="witnessButton">Show Witnesss</button>
  `
}

eventHub.addEventListener("witnessButtonClicked", event => {
   contentTarget.innerHTML = `
      <button id="witness_criminal_Button">Show Criminals</button>
   `
})

eventHub.addEventListener("witness_Criminal_ButtonClicked", WitnessButton)
