let categoriesArray = []
for(let event of eventsData.events) {
  categoriesArray.push(event.category)
  categoriesArray= [...new Set(categoriesArray)]
}

const createCheckBoxesTemplate = (category) => {
  return `
    <div>
      <input 
        onclick="filterEvents()"
        type="checkbox" 
        id="${category}"
        name="category" 
        value="${category}"
      >
      <label for="${category}">${category}</label>
    </div>
    `
}

const renderCheckboxes = (id, array) => {
  let container = document.querySelector(id)
  let cardsTemplate = array.map(createCheckBoxesTemplate) 
  container.innerHTML = cardsTemplate.join('')
}

renderCheckboxes(".checkbox-container", categoriesArray)
