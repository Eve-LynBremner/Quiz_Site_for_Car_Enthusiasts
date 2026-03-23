import React, { useState, useEffect } from "react";
import api from "../api";

const Leaderboard = () => {
  const [leaders, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await api.get("/api/leaders");

        console.log("leaders", response.data);

        setLeaderboard(response.data);
      } catch (error) {
        console.error("Failed to fetch leaderboard", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <div className="quiz-list flex flex-wrap gap-2">
        <table className="leaderboard-table w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Rank</th>
            <th className="border-b p-2">Username</th>
            <th className="border-b p-2">Score</th>
            <th className="border-b p-2">Quiz</th>
            <th className="border-b p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {leaders.map((leaders) => (
            <tr key={leaders.id}>
              <td className="p-2">{leaders.rank}</td>
              <td className="p-2">{leaders.user.username}</td>
              <td className="p-2">{leaders.score}</td>
              <td className="p-2">{leaders.quiz.quizName}</td>
              <td className="p-2">{new Date(leaders.dateAchieved).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Leaderboard;
