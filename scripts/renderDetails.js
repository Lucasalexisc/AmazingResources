let query = location.search
let params = new URLSearchParams(query)
let id_query = parseInt(params.get("id"))

let assistance = 'Assistance'
let estimate= 'Estimate'

const createDetailTemplate = (event) => {
  return `
    <article class="detail-article">
      <div class="detail-card">
        <img src="${event.image}" alt="event photo">
      </div>

      <div class="detail-card">
        <h2>Name: ${event.name}</h2>
        <p>Date: ${event.date}</p>
        <p>Description: ${event.description}</p>
        <p>Category: ${event.category}</p>
        <p>Place: ${event.place}</p>
        <p>Capacity: ${event.capacity}</p>
        <p>${event.assistance? assistance:estimate}: ${event.assistance? event.assistance:event.estimate}</p>
        <p>Price: ${event.price}</p>
      </div>
    </article>
  `
}

const renderDetails = (id, id_event) => {
  let container = document.querySelector(id)
  let event = eventsData.events.find(each => each._id === id_event)
  let detailTemplate = createDetailTemplate(event)
  container.innerHTML = detailTemplate
}

renderDetails(".detail-container", id_query)
