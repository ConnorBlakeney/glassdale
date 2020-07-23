let convictions = []

export const useConvictions = () => {
  return crimes.slice()
}

export const getConvictions = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then((response) => response.json())
    .then((parsedConvictions) => {
      console.table(parsedConvictions)
      convictions = parsedConvictions
    })
}
