import { getFacilities, useFacilities } from "./FacilityProvider.js";
import { FacilityHTMLConverter } from "./Facility.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
  if (event.target.id === "facilityButton") {
    render()
    const customEvent = new CustomEvent("facilityButtonClicked")
    eventHub.dispatchEvent(customEvent)
  }
})

const render = () => {
 getFacilities().then(() => {
  const facilities = useFacilities()
  contentTarget.innerHTML = `
    ${facilities 
      .map(facility => {
        return FacilityHTMLConverter(facility)
      }).join(" ")}
  `
 })
}

    

export const FacilitiesList = () => {
  getFacilities().then(() => {
    const allfacilities = useFacilities()
    render(allfacilities)
  })
}


// const render = (facilitiesObj) => {
//     contentTarget.innerHTML = FacilityHTMLConverter(facilitiesObj)
// }