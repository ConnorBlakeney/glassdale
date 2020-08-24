import { getFacilities, useFacilities } from "./FacilityProvider.js";
import { useCriminalFacilities, getCriminalFacilities } from "../facilities/CriminalFacilityProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalsProvider.js";
import { FacilityHTMLConverter } from "./Facility.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

let criminals = []
let criminalFacilities = []
let facilities = []

eventHub.addEventListener("click", event => {
  if (event.target.id === "facilityButton") {
    render()
    const customEvent = new CustomEvent("facilityButtonClicked")
    eventHub.dispatchEvent(customEvent)
  }
})

const render = () => {
    let facilityHTMLReps = ""
            facilities.map(facilityObj => {

                const cfRelationships = criminalFacilities.filter(cf => cf.facilityId === facilityObj.id)

                const matchingCriminals = cfRelationships.map(
                    (currentRelationship) => {
                        return criminals.find(criminal => criminal.id === currentRelationship.criminalId)

                    }
                )
                facilityHTMLReps += FacilityHTMLConverter(facilityObj, matchingCriminals)
            })

            contentTarget.innerHTML = `
            <h2>Facilities List</h2>
            <div class="facilityList">
           
            ${facilityHTMLReps}
            </div>
           
            `
        
    }
    

export const FacilitiesList = () => {
    getFacilities()
        .then(getCriminals)
        .then(getCriminalFacilities)
        .then(() => {
            criminals = useCriminals()
            criminalFacilities = useCriminalFacilities()
            facilities = useFacilities()
            render()
        })
}

