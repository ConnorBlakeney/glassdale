import {useOfficers, getOfficers} from "./OfficerProvider.js"
import {OfficerHTMLConverter} from "./OfficerHTMLConverter.js"

const contentTarget = document.querySelector(".officersContainer")

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
