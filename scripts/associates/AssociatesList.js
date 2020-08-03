// eventHub.addEventListener("associatesRequested", (event) => {
//   const criminalId = event.detail.criminalId

//   AssociateList(criminalId)
// })

// eventHub.addEventListener("click", (clickEvent) => {
//   if (clickEvent.target.id.startsWith("associates--")) {
//     const customEvent = new CustomEvent("showAssociatesClicked")
//     eventHub.dispatchEvent(customEvent)
//   }
// })

export const ShowAssociates = () => {
  const associates = document.querySelector(".alibis")
  if (associates.style.display === "none") {
    associates.style.display = "block"
  } else {
    associates.style.display = "none"
  }
}
