
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters")

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "witnessBtn") {
    const customEvent = new CustomEvent("showWitnessesClicked")
    eventHub.dispatchEvent(customEvent)
  }
})

export const ShowWitnessButton = () => {
  contentTarget.innerHTML = "<button id='witnessBtn'>Witnesses</button>"
}
