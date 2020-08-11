export const WitnessHTMLConverter = (witnessObj) => {
    return `
        <section class="witness card">
              <h3 class="name">Witness: ${witnessObj.name}</h3>
              <br>
              <div class="witness__statement">Statement: ${witnessObj.statements}</div>
        </section>         
    `
}