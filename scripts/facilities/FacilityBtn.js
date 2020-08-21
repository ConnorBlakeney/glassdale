import { FacilitiesList } from "./FacilityList.js";
import { CriminalList } from "../criminals/CriminalsList.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__facility")

export const FacilitiesButton = () => {
  contentTarget.innerHTML = `
      <button id="facilityButton">Show Facilities</button>
  `
}

eventHub.addEventListener("facilityButtonClicked", event => {
   contentTarget.innerHTML = `
      <button id="criminalButton">Show Criminals</button>
   `
})

eventHub.addEventListener("facilityButtonClicked", FacilitiesList)
eventHub.addEventListener("criminalButtonClicked", () => {
    CriminalList
    FacilitiesButton()
})