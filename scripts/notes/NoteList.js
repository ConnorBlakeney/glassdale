import { getNotes, useNotes } from "./NoteProvider.js"
import { useCriminals } from "../criminals/CriminalsProvider.js";
import { NoteHTMLConverter } from "./NoteHTMLConverter.js"

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")
// const noteContentTarget = document.querySelector(".noteList")



const render = (notes) => {

    const criminals = useCriminals()
    console.log(criminals)
        contentTarget.innerHTML = notes.reverse().map(
            (noteObject) => {
            // Find the criminal that this note is about
                const foundCriminal = criminals.find(
                    (criminalObject) => {
                        return criminalObject.id === noteObject.criminalId  
                    }
                )

            // Send the criminal to the HTML converter
            return NoteHTMLConverter(noteObject, foundCriminal)
        }
    ).join("")
}

export const NoteList = () => {
     getNotes()
        .then(useNotes)
        .then(render)
}

eventHub.addEventListener("showNotesClicked", NoteList)
eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
})
eventHub.addEventListener("hideNotesClicked", () => {
    contentTarget.innerHTML = ""
})