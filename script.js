const bookName = document.querySelector('#book-name');
const bookAuthor = document.querySelector('#book-author');
const addButton = document.querySelector('#add_book');
let booksContainer = document.querySelector('#books_section');

let book_list = [];
let localData = localStorage.getItem('books');
if (localData) {
  book_list = JSON.parse(localData);
  console.log(book_list);
}

addButton.addEventListener('click', () => {
  const bookName_input = bookName.value;
  const bookAuthor_input = bookAuthor.value;
  addBook(bookName_input, bookAuthor_input);
  bookAuthor.value = '';
  bookName.value = '';
});

function addBook(bookName, bookAuthor) {
  const book = {};
  book.title = bookName;
  book.author = bookAuthor;
  book_list.push(book);
  localStorage.setItem('books', JSON.stringify(book_list));
  addBookToPage(bookName, bookAuthor, book_list.length - 1);
}

function addBookToPage(bookName, bookAuthor, id) {
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('book_container');
  bookContainer.classList.add(`book${id}`);
  const bookDetails = document.createElement('p');
  const bookName_input = bookName;
  const bookAuthor_input = bookAuthor;
  bookDetails.innerHTML = `
    ${bookName_input}<br>${bookAuthor_input}
  `;
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  const breakLine = document.createElement('hr');
  bookContainer.appendChild(bookDetails);
  bookContainer.appendChild(removeButton);
  bookContainer.appendChild(breakLine);
  booksContainer.appendChild(bookContainer);
  removeButton.addEventListener('click', () => {
    book_list.splice(id, 1);
    localStorage.setItem('books', JSON.stringify(book_list));
    // location.reload();
    booksContainer.removeChild(bookContainer);
  });
}

function loadBooks(book_list) {
  for (let i = 0; i < book_list.length; i += 1) {
    addBookToPage(book_list[i].title, book_list[i].author, i);
  }
}
loadBooks(book_list);
