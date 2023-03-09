const { Post } = require("../models");

const postData = [
  {
    title: "Whos the greatest Pokemon?",
    body:
      "I woukd have to say Pickachu. he is the Mascot after all!",
    user_id: 1,
  },
  {
    title: "Kobe Bryant or Lebron James?",
    body: "This isnt even a close race. Kobe Bryant beats Lebron 10 times out of 10. Kobe has 5 NBA champinships, scored 81 points in a game and doest hop around to a new team every year!",
    user_id: 1,
  },
  {
    title: "Is it easy becoming a programmer?",
    body:
      "Becoming a programmer is no easy feet. One has to put in countless hours of studying, coding, and dealing with syntax errors until everything makes sense.",
    user_id: 4,
  },
  {
    title: "How do you make a Burger?",
    body:
      "making a burger requires one to first have ground beef. you than grill your burger until its well done and add lettuce, cheese and tomatoes!",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;