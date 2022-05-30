/* eslint-disable max-classes-per-file */
/*
Imports from Modules 
*/
// Main constructor import
// import {Book} from './modules/module-1.js';
// import { DateTime } from './node_modules/luxon/src/luxon.js';


// Main Code 
const bookName = document.getElementById('book-name');
const authorName = document.getElementById('author-name');
const formInput = document.querySelector('#new-book');

const bookSection = document.getElementById('book-list');

class bookInfo {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Stored Information - Add Book
class StoredInfo {
  static displayBooks() {
    const books = LocalStorage.getBooks();

    books.forEach((book) => StoredInfo.addbookToList(book));
  }

  static addbookToList(book) {

    const articleBook = document.createElement('article');

    articleBook.innerHTML = `
    <p id="book-name" class="book">${book.title} by ${book.author}</p>
    <button type="button" class="remove">Remove</button>`;

    bookSection.appendChild(articleBook);
  }

  static removeBook(element) {
    if(element.classList.contains('remove')) {
      element.parentElement.remove();
    }
  }

  static clearInputs() {
    bookName.value = '';
    authorName.value = '';
  }
}

// Local Storage
class LocalStorage {
  static getBooks() {
    let books;

    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBookStorage (book) {
    const books = LocalStorage.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBookStorage(author) {
    const books = LocalStorage.getBooks();

    books.forEach((book, index) => {
      
      books.splice(index, 1);

    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Display Books 
document.addEventListener('DOMContentLoaded', StoredInfo.displayBooks);

// Submission Form Event - Add Book 

formInput.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get Values
  const title = bookName.value;
  const author = authorName.value; 

  // Form Validation
  if (title != '' && author != '') {
    // Instate Book
  const book = new bookInfo(title, author);

  // Add book to List
  StoredInfo.addbookToList(book);

  // Add book to Local Storage 
  LocalStorage.addBookStorage(book);

  // Clear Data Inputs
  StoredInfo.clearInputs();
  } 
  else {
    alert('Name a book please')
  }
  
});

// Remove Book
bookSection.addEventListener('click', (e) => {
  // Remove book
  StoredInfo.removeBook(e.target);

  // Remove book from Storage 
  LocalStorage.removeBookStorage(e.target.previousElementSibling.textContent);
});

/*
Const from HTML for 
*/
const allBooksSection = document.getElementById('all-books');
const addNewBookSection = document.getElementById('add-new-book');
const contactSection = document.getElementById('contact');
const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

/*
Activate and Deactivate Sections
*/
allBooksSection.classList.add('active');
allBooksSection.classList.remove('hide-class');

function toggleVisbility(activeEle) {
  activeEle.classList.toggle('active');
  activeEle.classList.remove('hide-class');
}

function clearClasses(element1, element2) {
  element1.classList.remove('active');
  element1.classList.add('hide-class');

  element2.classList.remove('active');
  element2.classList.add('hide-class');
}

listLink.addEventListener('click', () => {
  toggleVisbility(allBooksSection);
  clearClasses(addNewBookSection, contactSection);
});

addLink.addEventListener('click', () => {
  toggleVisbility(addNewBookSection);
  clearClasses(allBooksSection, contactSection);
});

contactLink.addEventListener('click', () => {
  toggleVisbility(contactSection);
  clearClasses(allBooksSection, addNewBookSection);
});
