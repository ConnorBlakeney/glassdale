import {saveNote} from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    // Make a new object representation of a note

    const noteTitle = document.querySelector("#note--title")
    const noteAuthor = document.querySelector("#note--author")
    const noteContent = document.querySelector("#note--content")

    const newNote = {
      // Key/value pairs here
      title: noteTitle.value,
      author: noteAuthor.value,
      content: noteContent.value,
      timestamp: Date.now(),
    }
    console.log(newNote.title)

    // Change API state and application state
    saveNote(newNote)
  }
})

const render = () => {
  contentTarget.innerHTML = `
        <section class="noteForm">
            <input type="text" id="note--title" placeholder="Enter note title" />
            <input type="text" id="note--author" placeholder="Your name here" />
            <textarea id="note--content" placeholder="Note text here"></textarea>
            <button id="saveNote">Save Note</button>
        </section>
    `
}

export const NoteForm = () => {
  render()
}
