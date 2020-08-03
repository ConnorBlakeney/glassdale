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
              <button id="associates--${
                criminal.id
              }" class="myBtn">Associate Alibis</button>
             </section>
             `
}

export const AssociateHTML = (criminal) => {
  return `
  <span id="associates" class="alibis">
              ${criminal.known_associates
                .map(
                  (associate) =>
                    `
                    <div><strong>Name</strong>: ${associate.name}</div>
                    <span><strong>Alibi</strong>: ${associate.alibi}</div><br>
                `
                )
                .join("")}
              </span>
  `
}
