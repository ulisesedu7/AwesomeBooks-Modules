/* eslint-disable max-classes-per-file */
/*
Imports from Modules
*/
// Import Date from luxon
import { DateTime } from './modules/luxon.js';

// Main constructor import
import BookInfo from './modules/module-1.js';

// Stored Information - Add book class import
import StoredInfo from './modules/module-2.js';

// Local Storage import
import LocalStorage from './modules/module-3.js';

// toggle visibility function import
import toggleVisbility from './modules/module-4.js';

// clear classes function import
import clearClasses from './modules/module-5.js';

// Main Code
const bookName = document.getElementById('book-name');
const authorName = document.getElementById('author-name');
const formInput = document.querySelector('#new-book');

const bookSection = document.getElementById('book-list');

// Display Books
document.addEventListener('DOMContentLoaded', StoredInfo.displayBooks);

// Submission Form Event - Add Book
formInput.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get Values
  const title = bookName.value;
  const author = authorName.value;

  // Form Validation
  if (title !== '' && author !== '') {
    // Instate Book
    const book = new BookInfo(title, author);

    // Add book to List
    StoredInfo.addbookToList(book);

    // Add book to Local Storage
    LocalStorage.addBookStorage(book);

    // Clear Inputs
    StoredInfo.clearInputs();
  }
});

// Remove Book Event
bookSection.addEventListener('click', (e) => {
  // Remove book
  StoredInfo.removeBook(e.target);

  // Remove book from Storage
  LocalStorage.removeBookStorage(e.target.previousElementSibling.innerHTML);
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

// Date and Time
const nowDate = DateTime.now();

const dateDiv = document.getElementById('date');

dateDiv.innerHTML = nowDate;
