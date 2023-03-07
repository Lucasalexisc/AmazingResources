const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
});

const filterEvents = () => {
  let textInput = document.getElementById("input-category").value.toLowerCase()
  let checks = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(each => each.value)
  let filteredEventsArray = eventsData.events.filter(each => {
    return (
      (each.name.toLowerCase().includes(textInput) || (each.description.toLowerCase().includes(textInput)))
      && 
      (checks.length === 0 || checks.includes(each.category))
    )
  })

  if (filteredEventsArray.length > 0) {
    renderEvents("#cards", filteredEventsArray)
  } else {
    renderEvents("#cards", [])
  }
}
