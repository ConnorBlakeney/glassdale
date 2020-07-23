import { useCriminals, getCriminals } from "./criminalsProvider.js"
import { criminalsHTML } from "./criminalsHTML.js"

const contentTarget = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
  getCriminals().then(() => {
    const criminalArray = useCriminals()
    let criminalHTMLRepresentations = ""
    criminalArray.forEach((criminal) => {
      criminalHTMLRepresentations += criminalsHTML(criminal)
    })

    contentTarget.innerHTML = criminalHTMLRepresentations
  })
}
