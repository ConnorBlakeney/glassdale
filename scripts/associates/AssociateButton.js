// const contentTarget = document.querySelector(".alibiContainer")
const eventHub = document.querySelector(".container")

// eventHub.addEventListener("click", (clickEvent) => {
//   if (clickEvent.target.id.startsWith("associates--")) {
//     const customEvent = new CustomEvent("showAssociates")
//     eventHub.dispatchEvent(customEvent)
//   }
// })

eventHub.addEventListener(
  "click",
  (clickEvent = () => {
    if (clickEvent.target.id.startsWith("associates--")) {
      const associates = document.getElementById("associates")
      if (associates.style.display === "none") {
        associates.style.display = "block"
      } else {
        associates.style.display = "none"
      }
    }
    dispatchEvent(clickEvent)
  })
)
