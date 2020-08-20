let criminalFacilities = []

export const useCriminalFacilities = () => {
    return criminalFacilities.slice()
}

export const getCriminalFacilities = () => {
    return fetch("http://localhost:8088/criminalFacilites")    
        .then(response => response.json())
        .then(apiData => {
            criminalFacilities = apiData
        })
}