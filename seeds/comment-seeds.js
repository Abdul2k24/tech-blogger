const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I wish I could travel the world for free and enjoy all the different locations.",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Coding can sometimes be diffcult, but if you stick with it you will love it!",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Dragonball Z is the greatest anime to ever exist.",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;