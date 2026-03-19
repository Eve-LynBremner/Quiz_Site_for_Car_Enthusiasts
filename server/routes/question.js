// create a new router
const app = require("express").Router();

// import the models
const { Quiz, Question } = require("../models/index");

// Route to get questions by quizId

app.get("/:quizId", async (req, res) => {
  try {
    // const questions = await Question.findByPk(req.params.quizId);
    const questions = await Question.findAll({
      where: { quizId: req.params.quizId },
    });

    if (!questions.length) {
      return res.status(404).json({ message: "No questions found for this quiz" });
    }

    res.json({ questions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving questions" });
  }
});

// export the router
module.exports = app;


