import {useCriminals, getCriminals} from "./CriminalsProvider.js"
import {criminalsHTML} from "./CriminalsHTML.js"
import {useConvictions} from "../convictions/ConvictionsProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("officerSelected", (officerSelectedEvent) => {
  console.log("CriminalList: Custom officerSelected event heard on event hub")
  // GOAL: FIlter displayed criminals by the arresting officer that was chosen

  // Which officer was chosen: "Suzie Police" -> arrestingOfficer
  const officerChosen = officerSelectedEvent.detail.officerName

  // Filter criminal array based on what's chosen
  const allCriminals = useCriminals()

  // Array of criminals that were arrested by chosen officer
  const filteredByOfficer = allCriminals.filter((currentCriminal) => {
    if (currentCriminal.arrestingOfficer === officerChosen) {
      return true
    }
    return false
  })

  render(filteredByOfficer)
})

eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {
  // GOAL: Filter displayed criminals by the crime that was chosen
  console.log("CriminalList: Custom crimeSelected event heard on event hub")
  // Which crime was chosen?????
  const crimeThatWasSelected = crimeSelectedEvent.detail.crimeId // 9

  // Get actual crime name. Number is not enough.
  const arrayOfCrimes = useConvictions()
  const foundCrimeObject = arrayOfCrimes.find((crime) => {
    return parseInt(crimeThatWasSelected) === crime.id // NaN  "falsy"
  }) // { id: 9, name: "Theft" }

  // Filter criminal array to only criminal that have a matching `conviction` property value
  const allCriminals = useCriminals()

  const filteredCriminals = allCriminals.filter((currentCriminalObject) => {
    return foundCrimeObject.name === currentCriminalObject.conviction
  }) // [ {}, {}, {}]

  render(filteredCriminals)
})

const render = (arrayOfCriminals) => {
  console.log("CriminalList: Rendered to DOM")
  let criminalHTML = ""

  arrayOfCriminals.forEach((criminal) => {
    criminalHTML += criminalsHTML(criminal)
  })

  contentTarget.innerHTML = `
        <h2>Glassdale Convicted Criminals</h2>
        <article class="criminalList">
            ${criminalHTML}
        </article>
    `
}

eventHub.addEventListener("click", event => {
  if (event.target.id === "criminalButton") {
    render()
    const customEvent = new CustomEvent("criminalButtonClicked")
    eventHub.dispatchEvent(customEvent)
  }
})


export const CriminalList = () => {
  getCriminals().then(() => {
    const criminals = useCriminals()
    render(criminals)
  })
}
