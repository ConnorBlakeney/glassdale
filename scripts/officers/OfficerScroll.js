import {useOfficers, getOfficers} from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

const renderOfficer = (officersCollection) => {
  contentTarget.innerHTML = `<select class="dropdown" id="officersSelect">
  <option value="0">  Please select an officer...</option>
    ${officersCollection
      .map(
        (officersObj) =>
          `<option value="${officersObj.id}"> ${officersObj.name}</option>`
      )
      .join("")}    
    </select > `
}

export const OfficerScroll = () => {
  getOfficers().then(() => {
    // Get all convictions from application state
    const officer = useOfficers()

    renderOfficer(officer)
  })
}

eventHub.addEventListener("officerSelected", (officerSelectedEvent) => {
  const criminals = useCriminals()
  const officerName = officerSelectedEvent.detail.selectedOfficer

  if (selectedOfficer.detail.name !== "0") {
    const filteredCriminals = criminals.filter(
      (criminal) => criminal.arrestingOfficer === officerName
    )
    render(filteredCriminals)
  } else {
    render(criminals)
  }
})
