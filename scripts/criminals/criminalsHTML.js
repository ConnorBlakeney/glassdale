const eventHub = document.querySelector(".container")

export const CriminalHTMLConverter = (criminal, facilities) => {
  return `
          <section class="criminal card">
              <h3 class="name">${criminal.name}</h3>
              <br>
              <div class="criminal__age">Age: ${criminal.age}</div>
              <div class="criminal__crime"> Crime: ${criminal.conviction}</div>
              <div class="criminal__start">Term Start: ${new Date(
                criminal.incarceration.start
              ).toLocaleDateString("en-US")}</div>
              <div class="criminal__end">Term End: ${new Date(
                criminal.incarceration.end
              ).toLocaleDateString("en-US")}</div>

              <ul>
                ${
                    facilities.map(
                        (facility) => {
                            return `<li>${facility.facilityName}</li>`
                        }
                    ).join("")
                }
              </ul>

              <button id="associates--${criminal.id}">Associate Alibis</button>
          </section>
             `
}

eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("associates--")) {
    const [label, criminalId] = event.target.id.split("--")
    const showAssociates = new CustomEvent("showKnownAssociates", {
      detail: {
        chosenCriminal: criminalId,
      },
    })

    eventHub.dispatchEvent(showAssociates)
  }
})
