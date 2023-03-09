const { User } = require('../models');

const userData = [
  {
    username: "Mohamed",
    email: "Mohamed@gmail.com",
    password: "password1234"
  },
  {
    username: "Abdullahi",
    email: "Abdullahi@gmail.com",
    password: "password1234"
  },
  {
    username: "Jama",
    email: "Jama@gmail.com",
    password: "password1234"
  },
  {
    username: "Khalid",
    email: "Khalid@yahoo.com",
    password: "password1234"
  },
  {
    username: "ibrahim",
    email: "ibrahim@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;