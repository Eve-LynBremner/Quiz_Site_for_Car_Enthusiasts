// create a new router
const app = require("express").Router();

// import the models
const { Leader } = require("../models/index");

// Route to add new entry to leaderboard
app.post("/", async (req, res) => {
  try {
    const { username, score, timeTakenSeconds } = req.body;
    if (!username || !score || !timeTakenSeconds) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const entry = await Leader.create({ username, score, timeTakenSeconds, dateAchieved: new Date()});
    res.status(201).json(entry);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding to leaderboard", error: error });
  }
});

// Route to get Leaderboard
app.get("/", async (req, res) => {
  try {
    const entries = await Leader.findAll({
      order: [
        ["score", "DESC"],
        ["timeTakenSeconds", "ASC"],
      ],
    });
    
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving leaderboard", error: error });
  }
});

// app.get("/:id", async (req, res) => {
//   try {
//     const category = await Post.findByPk(req.params.id);
//     res.json(category);
//   } catch (error) {
//     res.status(500).json({ error: "Error retrieving category" });
//   }
// });


// export the router
module.exports = app;
