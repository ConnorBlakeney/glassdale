const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

export const ShowNoteButton = () => {
  contentTarget.innerHTML = <button id="showNotes">Show Notes</button>
}
