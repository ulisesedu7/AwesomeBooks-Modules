import {LocalStorage} from '../modules/module-3.js';

const bookName = document.getElementById('book-name');
const authorName = document.getElementById('author-name');
const bookSection = document.getElementById('book-list');

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

export {StoredInfo};