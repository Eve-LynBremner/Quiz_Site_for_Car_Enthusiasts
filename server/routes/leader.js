// create a new router
const app = require("express").Router();

// import the models
const { Leader } = require("../models/index");

// Route to add new entry to leaderboard
app.post("/", async (req, res) => {
  try {
    const { userId, score, quizId } = req.body;
    if (!userId || !score || !quizId ) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const entry = await Leader.create({ userId, score, quizId, dateAchieved: new Date()});
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
      include: [
        {
          model: User,
          attributes: ["username"]
        },
        {
          model: Quiz,
          attributes: ["title"]
        }
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
