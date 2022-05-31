// Local Storage
class LocalStorage {
  static getBooks() {
    let books;

    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBookStorage(book) {
    const books = LocalStorage.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBookStorage(content) {
    const books = LocalStorage.getBooks();

    books.forEach((book, index) => {
      if (`${book.title} by ${book.author}` === content) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default LocalStorage;