const { User, List, Book, ListContents } = require('../models');

const userdata = [
    {
        name: "Gio",
        username: "Gio333",
        email: "gio@whitaker.com",
        password: "12345"
    }
];

const listdata = [
    {
        listName: "Gio's Test List",
        creatorID: 1
    }
];

const bookdata = [
  {
    title: "I, Robot",
    authorName: "Isaac Asimov",
    ISBN: "1111",
    pubDate: "1959",
    pageCount: 222,
    availability: true,
  },
];

const contentdata = [
    {
        listID: 1,
        bookID: 1
    }
];

const seedUsers = () => User.bulkCreate(userdata);
const seedLists = () => List.bulkCreate(listdata);
const seedBooks = () => Book.bulkCreate(bookdata);
const seedContent = () => ListContents.bulkCreate(contentdata);

module.exports = seedUsers, seedLists, seedBooks, seedContent;
