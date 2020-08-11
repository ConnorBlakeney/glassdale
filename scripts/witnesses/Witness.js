export const WitnessHTMLConverter = (witnessObj) => {
    return `
        <section class="witness__card">
              <h3 class="name">${witnessObj.name}</h3>
              <br>
              <div class="witness__statement">Age: ${witnessObj.statement}</div>
        </section>         
    `
}