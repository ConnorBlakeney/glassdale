import { WitnessList } from "./WitnessList.js"
import { CriminalList } from "../criminals/CriminalsList.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__witness")

export const WitnessButton = () => {
  contentTarget.innerHTML = `
      <button id="witnessButton">Show Witnesss</button>
  `
}

eventHub.addEventListener("witnessButtonClicked", event => {
   contentTarget.innerHTML = `
      <button id="criminalButton">Show Criminals</button>
   `
})

eventHub.addEventListener("witnessButtonClicked", WitnessList)
eventHub.addEventListener("criminalButtonClicked", () => {
    CriminalList
    WitnessButton()
})
