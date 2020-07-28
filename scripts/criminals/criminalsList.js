import {useCriminals, getCriminals} from "./CriminalsProvider.js"
import {criminalsHTML} from "./CriminalsHTML.js"
import {useConvictions} from "../convictions/ConvictionsProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", (crimeSelectedEvent) => {
  // GOAL: Filter displayed criminals by the crime that was chosen

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

// eventHub.addEventListener("officerSelected", (event) => {
//   const officerName = event.detail.officer.name
//   const criminals = useCriminals()

//   if (officerName !== "0") {
//     const matchingCriminals = criminals.filter(
//       (criminal) => criminal.arrestingOfficer === officerName
//     )
//     render(matchingCriminals)
//   } else {
//     render(criminals)
//   }
// })

eventHub.addEventListener("officerSelected", (officerSelectedEvent) => {
  const criminals = useCriminals()
  const officerName = officerSelectedEvent.detail.officer

  if (selectedOfficer.detail.name !== "0") {
    const filteredCriminals = criminals.filter(
      (criminal) => criminal.arrestingOfficer === officerName
    )
    render(filteredCriminals)
  } else {
    render(criminals)
  }
})

const render = (arrayOfCriminals) => {
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

export const CriminalList = () => {
  getCriminals().then(() => {
    const criminals = useCriminals()
    render(criminals)
  })
}
