// import all models
const Question = require("./question");
const Leader = require("./leader");
const Quiz = require("./quiz");
const User = require("./user");

Question.belongsTo(Quiz, {
  foreignKey: "quizId",
  as: "quiz",
});

Quiz.hasMany(Question, {
  foreignKey: "quizId",
  as: "questions",
});

Leader.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

User.hasMany(Leader, {
  foreignKey: "userId",
  as: "scores",
});

Leader.belongsTo(Quiz, {
  foreignKey: "quizId",
  as: "quiz",
});

Quiz.hasMany(Leader, {
  foreignKey: "quizId",
  as: "quizScores",
});

module.exports = {
  Question,
  Quiz,
  Leader,
  User,
};
