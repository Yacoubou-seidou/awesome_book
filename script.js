import BookList from './book-list.js';

const bookObj = new BookList();

function loadBooks(bookList) {
  for (let i = 0; i < bookList.length; i += 1) {
    bookObj.addBookToPage(bookList[i].title, bookList[i].author, i);
  }
}
loadBooks(bookObj.bookList);
