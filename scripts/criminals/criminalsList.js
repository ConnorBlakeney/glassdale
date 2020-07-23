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

    contentTarget.innerHTML += `<h1>Criminals</h1> 
    <article class=""criminals__list>
      ${criminalHTMLRepresentations}
    </article>`
  })
}
