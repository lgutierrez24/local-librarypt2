function getTotalBooksCount(books) {
  const numberOfBooks = books.map((book) => book);
  return numberOfBooks.length;
}

function getTotalAccountsCount(accounts) {
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
  // create an new array of most popular books with map
  const result = books.map((book) => {
    const popularityInfo = {
      name: book.title,
      count: book.borrows.length,
    };

    return popularityInfo;
  });

  // sort the new array by count: greatest to least
  result.sort((titleA, titleB) => titleB.count - titleA.count);

  // limit to 5 elements
  result.splice(5);

  return result;
}

function getMostPopularAuthors(books, authors) {
  // create array of authors by popularity with map
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

  // sort the new array by count: greatest to least
  result.sort((authorA, authorB) => authorB.count - authorA.count);

  // limit array to 5
  result.splice(5);

  return result;
};

// Takes an array of books and an author ID and returns an array of books written by the given author
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
