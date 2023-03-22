import BookList from './book-list.js';

const bookObj = new BookList();
const formContainer = document.querySelector('.book-form');
const bookListSection = document.querySelector('.book-list-section');
const contactSection = document.querySelector('.contact-section');

const listLink = document.querySelector('#list-btn');
const AddNewLink = document.querySelector('#add-btn');
const contactLink = document.querySelector('#contact-btn');

listLink.addEventListener('click', () => {
  bookListSection.style.display = 'block';
  formContainer.style.display = 'none';
  contactSection.style.display = 'none';
});

AddNewLink.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  formContainer.style.display = 'flex';
  contactSection.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  contactSection.style.display = 'flex';
  formContainer.style.display = 'none';
});

const dateContainer = document.querySelector('.date-container');
dateContainer.innerHTML = new Date();
bookObj.loadBooks();
