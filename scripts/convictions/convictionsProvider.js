let convictions = []

export const useConvictions = () => {
  return convictions.slice()
}

export const getConvictions = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then((response) => response.json())
    .then((parsedConvictions) => {
      convictions = parsedConvictions
    })
}

export const useConvictionsAlphabetized = () => (
  convictions
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
);
