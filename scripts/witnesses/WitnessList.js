import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { WitnessHTMLConverter } from "./Witness.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
  if (event.target.id === "witnessButton") {
    render()
    const customEvent = new CustomEvent("witnessButtonClicked")
    eventHub.dispatchEvent(customEvent)
  }
})

const render = () => {
 getWitnesses().then(() => {
  const witnesses = useWitnesses()
  contentTarget.innerHTML = `
    ${witnesses 
      .map(witness => {
        return WitnessHTMLConverter(witness)
      }).join(" ")}
  `
 })
}

    

export const WitnessList = () => {
  getWitnesses().then(() => {
    const allWitnesses = useWitnesses()
    render(allWitnesses)
  })
}


// const render = (witnessObj) => {
//     contentTarget.innerHTML = WitnessHTMLConverter(witnessObj)
// }