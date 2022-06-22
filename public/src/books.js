function findAuthorById(authors, id) {
  const found = authors.find(author => author.id == id)
  return found;
}

function findBookById(books, id) {
  let bookObject = books.find(book => book.id == id)
  return bookObject;
}

function partitionBooksByBorrowedStatus(books) {
  const checkedAndReturned = [];
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  const unborrowedBooks = books.filter(book => book.borrows[0].returned);
  checkedAndReturned.push(borrowedBooks);
  checkedAndReturned.push(unborrowedBooks);
  return checkedAndReturned;
}


function getBorrowersForBook(book, accounts) {
const result = [];
for(let account of accounts) {
  for(let i = 0; i < book.borrows.length; i++) {
    if(account.id === book.borrows[i].id) {
      const returned = book.borrows[i].returned
      result.push({...account, returned})
    }
  }
}
return result.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
