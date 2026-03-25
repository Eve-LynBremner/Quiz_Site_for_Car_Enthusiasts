import React, { useState, useEffect } from "react";
import api from "../api";
import BorderGlow from "./BorderGlow";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);
const Leaderboard = () => {
  const [leaders, setLeaderboard] = useState([]);

  useGSAP(() => {
    const heroSplit = new SplitText(".titlenew2", { type: "chars, words" });

    gsap.from(heroSplit.chars, {
      yPercent: -70,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      opacity: 0.2,
    });
  }, []);

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
      <h1 className="titlenew2 font-bold  md:text-[13vw] font-sans pt-10 leading-none text-center text-gray-200 tracking-[-0.08em] text-shadow-[0_0_40px_rgba(255,255,255,0.4)]">
        Leaderboard
      </h1>
      <BorderGlow
        edgeSensitivity={30}
        glowColor="255 00 80"
        backgroundColor="#0f0000"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={5}
        animated={true}
        colors={["#ef4444", "#9ca3af", "#ffffff"]}
      >
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
                  <td className="p-2">
                    {new Date(leaders.dateAchieved).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </BorderGlow>
    </div>
  );
};

export default Leaderboard;
