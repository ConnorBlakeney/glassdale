export const FacilityHTMLConverter = (facilityObj, criminals) => {
    return `
        <section class="facility card">
              <h3 class="facility__name">${facilityObj.facilityName}</h3>
              <br>
              <div class="facility__security">Security Level: ${facilityObj.securityLevel}</div>
              <br>
              <div class="facility__capacity">Capacity: ${facilityObj.capacity}</div>
              <br>
              <div class="facility__criminals">Criminals: 
                <ul>
                ${
                    criminals.map(
                        (criminal) => {
                            return `<li>${criminal.name}</li>`
                        }
                    ).join("")
                }
                </ul>
              </div>
        </section>         
    `
}