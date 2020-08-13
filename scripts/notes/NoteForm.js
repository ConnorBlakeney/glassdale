import {saveNote} from "./NoteProvider.js"
import { getCriminals, useCriminalsAlphabetized } from "../criminals/CriminalsProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    // Make a new object representation of a note

    const noteTitle = document.querySelector("#note--title")
    const noteAuthor = document.querySelector("#note--author")
    const noteContent = document.querySelector("#note--content")
    const noteCriminal = document.querySelector("#note--criminal")

    // const criminalId = parseInt(noteCriminal.value)

    if (criminalId !== 0) {
        const newNote = {
      // Key/value pairs here
      title: noteTitle.value,
      author: noteAuthor.value,
      content: noteContent.value,
      timestamp: Date.now(),
      criminalId: parseInt(noteCriminal.value)
    }

    // Change API state and application state
    saveNote(newNote)
  } else {
            window.alert("Please select a criminal")
        }
    }
})

const render = (criminals) => {
  contentTarget.innerHTML = `
        <section class="noteForm">
            <input type="text" id="note--title" placeholder="Enter note title" />
            <input type="text" id="note--author" placeholder="Your name here" />
            <div class="form-group">
                <label class="note-form__label" for="criminalId">Criminal</label>
                <select class="note-form__criminalId" id="note--criminal" name="criminalId">
                <option value="0">Select a criminal...</option>
                ${criminals.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join('')}
                </select>
            </div>
            <textarea id="note--content" placeholder="Note text here"></textarea>
            <button id="saveNote">Save Note</button>
        </section>
    `
}

export const NoteForm = () => {
  getCriminals()
    .then(() => {
      const criminals = useCriminalsAlphabetized();
      render(criminals);
    });
};
