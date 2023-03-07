let pastEventsArray = []
let futureEventsArray = []
let allEventsArray = []

for (let event of eventsData.events) {
  if (event.date < "2022-01-01"){
    pastEventsArray.push(event)
  } else {
    futureEventsArray.push(event)
  }
  allEventsArray.push(event)
}

const createCardsTemplate = (event) => {
  return `
    <article class="single-card-container">
      <figure class="card">
        <img src="${event.image}" alt="${event.name}">

        <h2>${event.name}</h2>
        <figcaption>${event.description}</figcaption>
      </figure>
      <div class="bottom-card">
        <p>Price $${event.price.toString()}</p>
        <a href="./details.html?id=${event._id}" class="button-more">Ver más</a>
      </div>
    </article>
    `
}


const renderEvents = (id, eventsArray) => {
  let container = document.querySelector(id)
  let cardsTemplate = eventsArray.map(createCardsTemplate) 
  container.innerHTML = cardsTemplate.join('')
}

if(document.URL.includes("past-events.html")) {
  renderEvents("#cards", pastEventsArray)
} else if(document.URL.includes("future-events.html")) {
  renderEvents("#cards", futureEventsArray)
} else {
  renderEvents("#cards", allEventsArray)
}
