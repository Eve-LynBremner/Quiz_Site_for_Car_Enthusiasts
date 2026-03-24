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
    <header className="fixed left-0 top-0 w-full z-50   flex justify-between items-center px-8 py-4">
      <img
        src="/images/logos/motormind.png"
        alt="Motor Mind"
        className=" max-h-25 rounded-md "
      />
      <nav className="font-medium bg-red-900 rounded-md">
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
