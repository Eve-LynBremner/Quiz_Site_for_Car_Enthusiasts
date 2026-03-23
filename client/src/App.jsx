import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Quiz from "./components/Quiz";
import LandingPage from "./components/LandingPage";
import QuizList from "./components/QuizList";

import { SessionProvider } from "./contexts/SessionContext";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <SessionProvider>
        <Header />
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "green",
                color: "white",
              },
            },
            error: {
              style: {
                background: "red",
                color: "white",
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quiz/:quizid" element={<Quiz />} />
          <Route path="/quizlist" element={<QuizList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </SessionProvider>
    </div>
  );
};

export default App;
