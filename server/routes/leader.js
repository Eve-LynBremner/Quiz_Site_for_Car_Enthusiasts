// create a new router
const app = require("express").Router();

// import the models
const { Leader, User, Quiz } = require("../models/index");

// Route to add new entry to leaderboard or update existing entry in leaderboard
app.post("/", async (req, res) => {
  try {
    const { userId, score, quizId } = req.body;
    if (!userId || score === undefined || !quizId ) {
      console.log(req.body);
      return res.status(400).json({ message: "Missing required fields" });
    }
    
    // Check if user and quiz are already in table
    const existingEntry = await Leader.findOne({
      where: {userId: userId, quizId: quizId }
    });

    // 2. If it exists → update it
    if (existingEntry) {
      if (existingEntry.score < score) {
        existingEntry.score = score;
        existingEntry.dateAchieved = new Date();
        }
      
      await existingEntry.save();

      return res.status(200).json({
        message: "Leaderboard entry updated",
        entry: existingEntry
      });
    }

    const newEntry = await Leader.create({ userId, score, quizId, dateAchieved: new Date()});
    res.status(201).json(newEntry);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating leaderboard", error: error });
  }
});

// Route to get Leaderboard
app.get("/", async (req, res) => {
  try {
    const entries = await Leader.findAll({
      include: [
        {model: User, as: "user"},
        {model: Quiz, as: "quiz"}
      ],
      order: [
        ["score", "DESC"],
      ],
    });
    

    // Add rank
    const ranked = entries.map((entry, index) => ({
      rank: index + 1,
      ...entry.dataValues
    }));
    
    res.json(ranked);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving leaderboard", error: error });
  }
});

// export the router
module.exports = app;