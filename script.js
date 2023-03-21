const bookNameInput = document.querySelector('#book-name');
const bookAuthorInput = document.querySelector('#book-author');
const addButton = document.querySelector('#add_book');
const booksContainer = document.querySelector('#books_section');
const bookForm = document.querySelector('.book-form');

let bookList = [];
const localData = localStorage.getItem('books');
if (localData) {
  bookList = JSON.parse(localData);
}

function addBookToPage(bookName, bookAuthor, id) {
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('book_container');
  bookContainer.classList.add(`book${id}`);
  const bookDetails = document.createElement('p');
  bookDetails.innerHTML = `
    ${bookName}<br>${bookAuthor}
  `;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  const breakLine = document.createElement('hr');
  bookContainer.appendChild(bookDetails);
  bookContainer.appendChild(removeButton);
  bookContainer.appendChild(breakLine);
  booksContainer.appendChild(bookContainer);
  removeButton.addEventListener('click', () => {
    bookList.splice(id, 1);
    localStorage.setItem('books', JSON.stringify(bookList));
    booksContainer.removeChild(bookContainer);
  });
}

// Add book to booklist, update local storage and page view
function addBook(bookName, bookAuthor) {
  const book = {};
  book.title = bookName;
  book.author = bookAuthor;
  bookList.push(book);
  localStorage.setItem('books', JSON.stringify(bookList));
  addBookToPage(bookName, bookAuthor, bookList.length - 1);
}

addButton.addEventListener('click', () => {
  addBook(bookNameInput.value, bookAuthorInput.value);
  bookForm.reset();
});

function loadBooks(bookList) {
  for (let i = 0; i < bookList.length; i += 1) {
    addBookToPage(bookList[i].title, bookList[i].author, i);
  }
}
loadBooks(bookList);
