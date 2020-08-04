export const criminalsHTML = (criminal) => {
  return `
          <section class="criminal__card">
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
              <button id="associates--${criminal.id}">Associate Alibis</button>
             </section>
             `
}

const eventHub = document.querySelector(".container")

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
