function findAccountById(accounts, id) { //we want to return the object that in the array that matches the id
  const found = accounts.find(account => account.id == id); //we want to use .find() to get the desired output
  return found; // don't use console.log(), return it
}

function sortAccountsByLastName(accounts) { //we should return an array that is sortted alphabetically according to the array provided
  let sortedByLast = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()
  ? 1 : -1)// needed to add the lowercase method to achieve the output as alphabetical order
  return sortedByLast;
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  return books.reduce((totalBorrowed, { borrows }) => {
    if (borrows.some((record) => record.id === accountId)) totalBorrowed++;
    return totalBorrowed;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
//Creates empty array to be filled with borrowed books
  const borrowedBooks = [];

  books.forEach((book) => {
    let bookBorrows = book.borrows;

//loops through the borrows array to check if the borrowers ID matches the accounts ID
//with the condition that the book has not been returned
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });

  //returns a new object within an array of all of the borrowed books 
  let result = borrowedBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });

  return result;
}

// Helper function
// Returns author object
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
