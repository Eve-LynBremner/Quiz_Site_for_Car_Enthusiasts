// Import required packages
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// import models
const { Quiz, Question, Leader, User } = require("../models");

// import seed data
const questionsData = require("./questions.json");
const usersData = require("./users.json");
const leadersData = require("./leaders.json");
const quizzesData = require("./quizzes.json");

// Seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Hash the password for each user
  for (const user of usersData) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  await User.bulkCreate(usersData);
  await Quiz.bulkCreate(quizzesData);
  await Question.bulkCreate(questionsData);
  await Leader.bulkCreate(leadersData);

  process.exit(0);
};

// Call seedDatabase function
seedDatabase();
