import {useCriminals, getCriminals} from "./CriminalsProvider.js"
import {CriminalHTMLConverter} from "./CriminalsHTML.js"
import {useConvictions} from "../convictions/ConvictionsProvider.js"
import { getFacilities, useFacilities } from "../facilities/FacilityProvider.js";
import { useCriminalFacilities, getCriminalFacilities } from "../facilities/CriminalFacilityProvider.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

let criminals = []
let criminalFacilities = []
let facilities = []
const chosenFilters = {
    crime: "0",
    officer: "0"
}

export const CriminalList = () => {
    getCriminals()
        .then(getFacilities)
        .then(getCriminalFacilities)
        .then(() => {
            criminals = useCriminals()
            criminalFacilities = useCriminalFacilities()
            facilities = useFacilities()

            render()
        })
}

const render = () => {
    console.log("CriminalList: Rendered to DOM")
    let criminalHTML = ""

    const arrayOfCriminalHTMLRepresentations = criminals.map(
        (criminal) => {
            // Get all of the criminal/facility relationships for this criminal
            const criminalFacilityRelationships = criminalFacilities.filter(
                (cf) => {
                    return criminal.id === cf.criminalId
                }
            )

            // Convert the relationship objects to facility objects
            const matchingFacilities = criminalFacilityRelationships.map(
                (currentRelationship) => {
                    return facilities.find(
                        (facility) => {
                            return currentRelationship.facilityId === facility.id
                        }
                    )
                }
            )
            
            return CriminalHTMLConverter(criminal, matchingFacilities)
        }
    )

    contentTarget.innerHTML = `
        <h2>Glassdale Convicted Criminals</h2>
        <article class="criminalList">
            ${arrayOfCriminalHTMLRepresentations.join("")}
        </article>
    `
}

const filterCriminals = () => {
    criminals = useCriminals()
    const arrayOfCrimes = useConvictions()

    // If a crime was chosen, filter all criminals by that crime
    if (chosenFilters.crime !== "0") {
        const foundCrimeObject = arrayOfCrimes.find(
            (crime) => {
                return parseInt(chosenFilters.crime) === crime.id
            }
        )

        criminals = criminals.filter(
            (currentCriminalObject) => {
                return foundCrimeObject.name === currentCriminalObject.conviction
            }
        )
    }

    // If an officer was chosen, filter all criminals by that crime
    if (chosenFilters.officer !== "0") {
        criminals = criminals.filter(
            (currentCriminal) => {
                if (currentCriminal.arrestingOfficer === chosenFilters.officer) {
                    return true
                }
                return false
            }
        )
    }
}

eventHub.addEventListener("officerSelected", (officerSelectedEvent) => {
    console.log("CriminalList: Custom officerSelected event heard on event hub")

    chosenFilters.officer = officerSelectedEvent.detail.officerName
    filterCriminals()
    render()
})

eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {
    console.log("CriminalList: Custom crimeSelected event heard on event hub")

    chosenFilters.crime = crimeSelectedEvent.detail.crimeId

    filterCriminals()
    render()
})

eventHub.addEventListener("click", event => {
  if (event.target.id === "criminalButton") {
    render()
    const customEvent = new CustomEvent("criminalButtonClicked")
    eventHub.dispatchEvent(customEvent)
  }
})