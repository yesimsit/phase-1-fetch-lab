
function fetchBooks(){
  return fetch("https://anapioficeandfire.com/api/books")
  .then((response)=>response.json())
  .then((json)=>renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h1 = document.createElement('h1');
    h1.innerHTML = book.name;
    main.appendChild(h1);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
