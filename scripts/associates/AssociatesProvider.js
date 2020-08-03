import {} from "./criminals.Criminals"

let associates = []

export const useAssociates = () => {
  return associates.slice()
}

export const getAssociates = () => {
  return fetch("https://criminals.glassdale.us/criminals")
    .then((response) => response.json())
    .then((parsedCriminals) => {
      criminals = parsedCriminals
    })
}

export const AssociatesList = () => {
  getNotes().then(() => {
    const allNotes = useNotes()
    render(allNotes)
  })
}
