export const FacilityHTMLConverter = (facilityObj) => {
    return `
        <section class="witness card">
              <h3 class="facility__name">${facilityObj.facilityName}</h3>
              <br>
              <div class="facility__security">${facilityObj.securityLevel}</div>
              <br>
              <div class="facility__capacity">${facilityObj.capacity}</div>
        </section>         
    `
}