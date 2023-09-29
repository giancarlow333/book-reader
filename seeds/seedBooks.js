const { Book } = require('../models');

const bookdata = [
  {
    id: "1", 
    title: "I, Robot",
    authorFirst: "Isaac",
    authorLast: "Asimov",
    ISBN: "1",
    pubDate: "1959",
    pageCount: 222,
    availability: true,
  },
]

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;
