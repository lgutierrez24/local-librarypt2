function getTotalBooksCount(books) {//returns number that stands for the number of book objects inside of the array
  const numberOfBooks = books.map((book) => book);
  return numberOfBooks.length;
}

function getTotalAccountsCount(accounts) {//same return as the  previous problem, but different output
return accounts.length;
}

function getBooksBorrowedCount(books) {
let booksBorrowed = 0;
books.forEach(book => {
  if(!book.borrows[0].returned)
  booksBorrowed++;
});
return booksBorrowed;
}

function getMostCommonGenres(books) {
const genresOfBooks = books.map((book) => book.genre);
const commonGenres = [];
genresOfBooks.map((genre) => {
  const location = commonGenres.findIndex((element) => element.name
  === genre);
  if(location >= 0) {
    commonGenres[location].count = commonGenres[location].count + 1;
  } else {
    commonGenres.push({name: genre, count: 1});
  }
});
commonGenres.sort((a,b) => b.count - a.count);
if(commonGenres.length > 5) {
  return commonGenres.slice(0,5);
}
return commonGenres;
}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const popularityInfo = {
      name: book.title,
      count: book.borrows.length,
    };

    return popularityInfo;
  });
  result.sort((titleA, titleB) => titleB.count - titleA.count);
  result.splice(5);

  return result;
}

function getMostPopularAuthors(books, authors) {
  const result = authors.map((author) => {
    const fullName = `${author.name.first} ${author.name.last}`;
    const booksByAuthor = getBooksByAuthorId(books, author.id);
    const totalBorrows = booksByAuthor.reduce((accum, book) => accum + book.borrows.length, 0);
    const newAuthorInfo = {
      name: fullName,
      count: totalBorrows,
    };

    return newAuthorInfo;
  });
  result.sort((authorA, authorB) => authorB.count - authorA.count);
  result.splice(5);
  return result;
}

// helper function
const getBooksByAuthorId = (books, authorId) => {
  return books.filter((book) => book.authorId === authorId);
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
