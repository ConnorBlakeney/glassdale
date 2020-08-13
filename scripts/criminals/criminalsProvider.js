let criminals = []

export const useCriminals = () => {
  return criminals.slice()
}

export const getCriminals = () => {
  return fetch("https://criminals.glassdale.us/criminals")
    .then((response) => response.json())
    .then((parsedCriminals) => {
      criminals = parsedCriminals
    })
}

export const useCriminalsAlphabetized = () => (
  criminals
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
);
