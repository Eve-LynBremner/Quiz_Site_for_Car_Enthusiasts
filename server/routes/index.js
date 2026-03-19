const router = require("express").Router();

const questionRoutes = require("./question");
const leaderRoutes = require("./leader");
const userRoutes = require("./user");
const quizRoutes = require("./quiz");

// create a default route for /api
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.use("/api/leaders", leaderRoutes);
router.use("/api/questions", questionRoutes);
router.use("/api/users", userRoutes);
router.use("/api/quizzes", quizRoutes);

module.exports = router;
