/**
 1. Create an object that represents a book. It should have 4-5 properties that
    make sense for a book to have.
 2. Then write a function that has one argument, a book, that will return the
    following description from a book object:
   `The book <book name> was written by <author name> in the year <publishing year>
 */
'use-strict'

let book = {
  bookName: `Harry Potter and the Philosopher's Stone`,
  authorName: `J. K. Rowling`,
  publishingYear: `1997`,
  genre: `Fantasy`,
};

function getBookDetails(book){
  return `The book ${book.bookName} was written by ${book.authorName} in the year ${book.publishingYear}`
}

console.log(getBookDetails(book));