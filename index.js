function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json));  
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// function visualData(json) {
//   const main = document.querySelector('main')
//   json.forEach(d => {
//   let li = document.createElement('li')
//   li.innerHTML = `${d.name}`
//   main.appendChild(li)
//   })
// }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
})

