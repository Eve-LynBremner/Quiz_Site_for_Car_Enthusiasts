import React, { useState, useEffect } from "react";
import api from "../api";
import QuizCard from "./QuizCard";

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useGSAP(() => {
    // gsap animations will go here

    //split text animation
    const heroSplit = new SplitText(".titlenew", { type: "chars, words" });

    gsap.from(heroSplit.chars, {
      yPercent: -70,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      opacity: 0.2,
    });
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("/api/quizzes");

        console.log("quizzes", response.data);

        setQuizzes(response.data);
      } catch (error) {
        console.error("Failed to fetch quizzes", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1 className="titlenew text-2xl md:text-[13vw] font-sans leading-none text-center text-gray-200 tracking-[-0.08em] text-shadow-[0_0_40px_rgba(255,255,255,0.4)]">
        Quizlist
      </h1>
      <div className="quiz-list flex flex-wrap gap-24 justify-center">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizList;
