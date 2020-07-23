import { useOfficers, getOfficers } from "./OfficerProvider.js"
import { OfficerHTMLConverter } from "./OfficerHTMLConverter.js"

const contentTarget = document.querySelector(".officersContainter")

export const OfficerList = () => {
  getOfficers().then(() => {
    const officerArray = useOfficers()
    let officerHTMLRepresentations = ""
    officerArray.forEach((officer) => {
      officerHTMLRepresentations += OfficerHTMLConverter(officer)
    })

    contentTarget.innerHTML = `<h1>Officers</h1> 
    <article class=""officers__list>
      ${officerHTMLRepresentations}
    </article>`
  })
}
