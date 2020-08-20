`use-strict`


var library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false
    }
  ];
  /**
 Write a JavaScript function that receives the following library object as an input 
 and displays the books that can be read (the reading status is true).
 Log the book name, author name and reading status .
 */

 const getReadableBooks = (library) => {
   const readableBooks =  library.filter((book) => {
    return book.readingStatus;
   });

   readableBooks.forEach((book) => {
     console.log(`Book Name: ${book.title} | Author: ${book.author} | Reading Status ${book.readingStatus}`);
   });
 };

 //TEST
 getReadableBooks(library);