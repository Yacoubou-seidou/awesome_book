const bookName = document.querySelector('#book-name');
const bookAuthor = document.querySelector('#book-author');
const addButton = document.querySelector('#add_book');
const booksContainer = document.querySelector('#books_section');

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
  const bookNameInput = bookName;
  const bookAuthorInput = bookAuthor;
  bookDetails.innerHTML = `
    ${bookNameInput}<br>${bookAuthorInput}
  `;
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
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

function addBook(bookName, bookAuthor) {
  const book = {};
  book.title = bookName;
  book.author = bookAuthor;
  bookList.push(book);
  localStorage.setItem('books', JSON.stringify(bookList));
  addBookToPage(bookName, bookAuthor, bookList.length - 1);
}

addButton.addEventListener('click', () => {
  const bookNameInput = bookName.value;
  const bookAuthorInput = bookAuthor.value;
  addBook(bookNameInput, bookAuthorInput);
  bookAuthor.value = '';
  bookName.value = '';
});

function loadBooks(bookList) {
  for (let i = 0; i < bookList.length; i += 1) {
    addBookToPage(bookList[i].title, bookList[i].author, i);
  }
}
loadBooks(bookList);
