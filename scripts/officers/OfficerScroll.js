import {useOfficers, getOfficers} from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")

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
