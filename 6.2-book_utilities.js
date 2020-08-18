'use-strict'

//1. create 2 book objects with properties: name, author, year.
let book1 = {
  bookName: `Harry Potter and the Philosopher's Stone`,
  authorName: `J. K. Rowling`,
  publishingYear: 1997,
};
let book2 = {
  bookName: `Harry Potter and the Chamber of Secrets`,
  authorName: `J. K. Rowling`,
  publishingYear: 1998 ,
};


//2. create an empty object bookUtils (utils = short for utilities).
let bookUtils = {};


//3. add to to the bookUtils object a function getFirstPublished, 
//   that receives 2 books and returns the book with the smaller year.
bookUtils.getFirstPublished = function(book1, book2){
  return book1.publishingYear < book2.publishingYear ? book1 : book2;
}
// TEST
// console.log(bookUtils.getFirstPublished(book1, book2)); 


//4. add to bookUtils object a function setNewEdition, 
//   that receives a book and an edition year and sets a new property latestEdition
//   with the edition year, or updates an existing one.
bookUtils.setNewEdition = function(book, editionYear){
  book.latestEdition = editionYear;
}
// TEST
// bookUtils.setNewEdition(book1, 2000);
// console.log(book1); 


//5. add to bookUtils object a setLanguage function, 
//   that receives a book and a language and sets a new property language 
//   with the language, or updates an existing one.
bookUtils.setLanguage = function(book, language){
  book.language = language;
}
// TEST
// bookUtils.setLanguage(book1, `English`);
// console.log(book1); 


//6. add to to the bookUtils object a setTranslation function, 
//   that receives a book, a language and a translator, 
//   and sets a new property of translation, which is an object that contains the translator and the language.
bookUtils.setTranslation = function(book, language, translator){
  book.translation = {language, translator };
}
// TEST
// bookUtils.setTranslation(book1, `English`, `Web Bos`);
// console.log(book1); 


//7. add to to the bookUtils object a setPublisher function, 
//   that receives a book a name and a location, and sets a new property named publisher, 
//   which is an object that contains the name and location.
bookUtils.setPublisher = function(book, name, location){
  book.publisher = {name, location };
}
// TEST
// bookUtils.setPublisher(book1, `ABC PUB`, `England`);
// console.log(book1); 


//8. add to to the bookUtils object a function isSamePublisher, 
//   that receives 2 books and checks if the publisher name and location are identical in the 2 books
bookUtils.isSamePublisher = function(book1, book2){
  book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location
  ? console.log(`identical`)
  :console.log(`NOT identical`);
}
// TEST
// bookUtils.setPublisher(book1, `ABC pUB`, `England`);
// bookUtils.setPublisher(book2, `ABC PUB`, `England`);
// bookUtils.isSamePublisher(book1, book2);

