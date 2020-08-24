// import { NoteList } from "./NoteList.js";

const showNoteContentTarget = document.querySelector(".showNoteListButton")
const hideNoteContentTarget = document.querySelector(".hideNoteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "showNotes") {
    const customEvent = new CustomEvent("showNotesClicked")
    eventHub.dispatchEvent(customEvent)
  }

})
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "hideNotes") {
    // Make a new object representation of a note
        const customEvent = new CustomEvent("hideNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNoteButton = () => {
  showNoteContentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}

export const HideNoteButton = () => {
  hideNoteContentTarget.innerHTML = "<button id='hideNotes'>Hide Notes</button>"
}

