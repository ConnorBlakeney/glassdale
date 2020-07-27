import {useOfficers, getOfficers} from "./OfficerProvider.js"
import {OfficerHTMLConverter} from "./OfficerHTMLConverter.js"

const contentTarget = document.querySelector(".officersContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "officerSelect") {
    // Get the name of the selected officer
    const selectedOfficer = changeEvent.target.value

    // Define a custom event
    const customEvent = new CustomEvent("officerSelected", {
      detail: {
        officer: selectedOfficer,
      },
    })

    // Dispatch event to event hub
    eventHub.dispatchEvent(customEvent)
  }
})

const render = (arrayOfOfficers) => {
  let officerHTML = ""

  arrayOfOfficers.forEach((officer) => {
    officerHTML += OfficerHTMLConverter(officer)
  })

  contentTarget.innerHTML = `
        <h2>Glassdale Police Officers</h2>
        <article class="criminalList">
            ${officerHTML}
        </article>
    `
}

export const OfficerList = () => {
  getOfficers().then(() => {
    const officers = useOfficers()
    render(officers)
  })
}
