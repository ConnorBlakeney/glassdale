import { getWitnesses, useWitnesses } from "./WitnessProvider"
import { WitnessHTMLConverter } from "./Witness.js";

const contentTarget = document.querySelector(".filters__witness")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showWitnessesClicked", (customEvent) => {
    render
    WitnessList()
})

export const WitnessList = () => {
  getWitnesses().then(() => {
    const allWitnesses = useWitnesses()
    render(allWitnesses)
  })
}

const render = (witnessObj) => {
    contentTarget.innerHTML = WitnessHTMLConverter(witnessObj)
}