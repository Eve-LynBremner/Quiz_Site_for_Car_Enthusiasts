import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSession } from "../contexts/SessionContext";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const { user } = useSession();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const wordCase = (word) => {
    if (word === undefined) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <header>
      <img
        src="/images/logos/motormind-black.jpg"
        alt="Motor Mind"
        className="max-w-40 h-auto rounded-md "
      />
      <nav>
        {token ? (
          <>
            <Link to="/quizlist">Quizlist</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
