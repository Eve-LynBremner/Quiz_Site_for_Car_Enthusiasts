// create a new router
const app = require("express").Router();

// import the models
const { Quiz } = require("../models/index");

// Route to get all quizzes
app.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();

    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving questions", error });
  }
});


// Route to get quiz by category and difficulty
app.get("/by/", async (req, res) => {
  try {
    const { category, difficulty } = req.query;

    if (!category || !difficulty) {
      return res.status(400).json({ message: "Category and difficulty are required" });
    }

    const quiz = await Quiz.findOne({
      where: { category: category, difficulty: difficulty }
    });

    if (!quiz) {
      return res.status(404).json({ message: "No quiz found for this category and difficulty" });
    }
    res.json({ quiz });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving quiz" });
  }
});

// export the router
module.exports = app;
