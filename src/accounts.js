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
  //returns number of times the account's ID shows up in the book array
  const accountId = account.id;
  return books.reduce((totalBorrowed, { borrows }) => {
    if (borrows.some((record) => record.id === accountId)) totalBorrowed++;
    return totalBorrowed;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  //return an array of objects
  return (
    books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned)
      .map((book) => { //needed to use map to filter through the books
        book["author"] = authors.find((author) => author.id === book.authorId);
        return book;
      })
  );
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
