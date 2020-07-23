import { useCriminals, getCriminals } from "./CriminalsProvider.js"
import { criminalsHTML } from "./CriminalsHTML.js"

const contentTarget = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
  getCriminals().then(() => {
    const criminalArray = useCriminals()
    let criminalHTMLRepresentations = ""
    criminalArray.forEach((criminal) => {
      criminalHTMLRepresentations += criminalsHTML(criminal)
    })

    contentTarget.innerHTML += `
    <h2>Glassdale Convicted Criminals</h2>
    <article class="criminal__list">
        ${criminalHTMLRepresentations}
    </article>
`
  })
}
