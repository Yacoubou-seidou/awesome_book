class BookList {
  bookList = [];

  constructor() {
    this.bookNameInput = document.querySelector('#book-name');
    this.bookAuthorInput = document.querySelector('#book-author');
    this.addButton = document.querySelector('#add_book');
    this.booksContainer = document.querySelector('#books_section');
    this.bookForm = document.querySelector('.book-form');
    this.localData = localStorage.getItem('books');

    if (this.localData) {
      this.bookList = JSON.parse(this.localData);
    }

    this.addButton.addEventListener('click', () => {
      this.addBook(this.bookNameInput.value, this.bookAuthorInput.value);
      this.bookForm.reset();
    });
  }

  addBookToPage(bookName, bookAuthor, id) {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book_container');
    bookContainer.classList.add(`book${id}`);
    if (id % 2 === 0) {
      bookContainer.classList.add('dark-bg');
    }
    bookContainer.classList.add('book-item');
    const bookDetails = document.createElement('p');
    bookDetails.innerHTML = `
      "${bookName}" by ${bookAuthor}
    `;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    bookContainer.appendChild(bookDetails);
    bookContainer.appendChild(removeButton);
    this.booksContainer.appendChild(bookContainer);
    removeButton.addEventListener('click', () => {
      this.bookList.splice(id, 1);
      localStorage.setItem('books', JSON.stringify(this.bookList));
      this.booksContainer.removeChild(bookContainer);
      this.loadBooks();
    });
  }

  // Add book to booklist, update local storage and page view
  addBook(bookName, bookAuthor) {
    const book = {};
    book.title = bookName;
    book.author = bookAuthor;
    this.bookList.push(book);
    localStorage.setItem('books', JSON.stringify(this.bookList));
    this.addBookToPage(bookName, bookAuthor, this.bookList.length - 1);
  }

  loadBooks(bookList = this.bookList) {
    this.booksContainer.textContent = '';
    for (let i = 0; i < bookList.length; i += 1) {
      this.addBookToPage(bookList[i].title, bookList[i].author, i);
    }
  }
}

export default BookList;
