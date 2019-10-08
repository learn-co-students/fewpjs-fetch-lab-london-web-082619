function fetchBooks() {
  let fetched = fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
  return fetched;
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// some extra stuff
function bookInSeries(json, number){ 
  const main = document.querySelector('main');
  const h2 = document.createElement('h2');
  h2.innerHTML = `<h2>${json[number-1].name}</h2>`;
  main.appendChild(h2);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
