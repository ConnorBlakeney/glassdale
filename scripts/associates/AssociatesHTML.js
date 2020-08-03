// import {useCriminals} from "../criminals/CriminalsProvider.js"

// const eventHub = document.querySelector(".container")
// const contentTarget = document.querySelector(".alibiContainer")

// // export const DialogComponent = () => {
// //   eventHub.addEventListener("associateButtonClicked", (event) => {
// //     const criminals = useCriminals()
// //     console.log(event.detail.criminalId)

// //     /**
// //      * I've got all the criminals. I've got the id
// //      * of the criminal that was clicked.
// //      *
// //      * How does me get the full criminal object from the array?
// //      */
// //     const foundCriminal = criminals.find((singleCriminal) => {
// //       return singleCriminal.id === parseInt(event.detail.criminalId, 10)
// //     })

// //     const alibisHTML = foundCriminal.known_associates
// //       .map((singleAssociate) => {
// //         return `
// //                     <div class="associate__name">${singleAssociate.name}</div>
// //                     <div class="associate__alibi">${singleAssociate.alibi}</div>

// //                 `
// //       })
// //       .join("")

// //     document.querySelector(".alibi__text").innerHTML = alibisHTML
// //     document.querySelector(".alibies").showModal()
// //   })

// //   const render = () => {
// //     contentTarget.innerHTML = `
// //             <dialog class="alibies">
// //                 <div class="alibi__text"></div>
// //                 <button id="closeDialog"></button>
// //             </dialog>
// //         `
// //   }

// //   render()
// // }

// export const AssociateHTML = (criminalObject) => {
//   return `
//     ${criminalObject.known_associates
//       .map(
//         (assoc) =>
//           `
//                     <div><strong>Name</strong>: ${assoc.name}</div>
//                     <div><strong>Alibi</strong>: ${assoc.alibi}</div><br>
//                 `
//       )
//       .join("")}
//   `
// }

export const AssociatesHTML = (criminal) => {
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
