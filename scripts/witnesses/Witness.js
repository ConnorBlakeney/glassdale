export const WitnessHTMLConverter = (witnessObj) => {
    return `
        <section class="witness card">
              <h3 class="witness__name">Witness: ${witnessObj.name}</h3>
              <br>
              <div class="witness__statement">Statement: ${witnessObj.statements}</div>
        </section>         
    `
}