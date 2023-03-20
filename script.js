const bookName = document.querySelector('#book-name');
const bookAuthor = document.querySelector('#book-author');
const addButton = document.querySelector('#add_book');
const booksContainer = document.querySelector('#books_section');

let book_list = []

addButton.addEventListener('click', () => {
  const bookName_input = bookName.value;
  const bookAuthor_input = bookAuthor.value;
  addBook(bookName_input, bookAuthor_input);
});

function addBook (bookName, bookAuthor) {
  const book = {};
  book.title = bookName;
  book.author = bookAuthor;
  book_list.push(book);

  addBookToPage(bookName, bookAuthor);
}

function addBookToPage (bookName, bookAuthor) {
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('book_container');
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
}

function loadBooks(book_list) {
  for (let i = 0; i < book_list.length; i += 1) {
    addBookToPage(book_list[i].name, book_list[i].author);
  }
}

window.onload = loadBooks;