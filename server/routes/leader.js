// create a new router
const app = require("express").Router();

// import the models
const { Leader, User, Quiz } = require("../models/index");

// Route to add new entry to leaderboard
app.post("/", async (req, res) => {
  try {
    const { userId, score, quizId } = req.body;
    if (!userId || score === undefined || !quizId ) {
      console.log(req.body);
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
          model: User, as: "user"
        },
        {
          model: Quiz, as: "quiz"
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


// app.post("/", async (req, res) => {
//   try {
//     const { userId, score, quizId, timeTakenSeconds } = req.body;

//     if (!userId || !score || !quizId || !timeTakenSeconds) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     // 1. Check if this user already has an entry for this quiz
//     const existingEntry = await Leader.findOne({
//       where: { userId, quizId }
//     });

//     // 2. If it exists → update it
//     if (existingEntry) {
//       existingEntry.score = score;
//       existingEntry.timeTakenSeconds = timeTakenSeconds;
//       existingEntry.dateAchieved = new Date();

//       await existingEntry.save();

//       return res.status(200).json({
//         message: "Leaderboard entry updated",
//         entry: existingEntry
//       });
//     }

//     // 3. Otherwise → create a new entry
//     const newEntry = await Leader.create({
//       userId,
//       score,
//       quizId,
//       timeTakenSeconds,
//       dateAchieved: new Date()
//     });

//     return res.status(201).json({
//       message: "Leaderboard entry created",
//       entry: newEntry
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error adding/updating leaderboard", error });
//   }
// });
