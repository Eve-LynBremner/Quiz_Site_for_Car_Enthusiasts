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
    <header className="fixed left-0 top-0 w-full z-50  flex justify-between items-center px-8 py-4">
      <img
        src="/images/logos/motormind.png"
        alt="Motor Mind"
        className=" max-h-25 rounded-md "
      />
      <nav className="text-lg rounded-md font-medium">
        {token ? (
          <>
            <Link to="/quizlist" className="hover-underline">
              Quizlist
            </Link>
            <Link to="/leaderboard" className="hover-underline">
              Leaderboard
            </Link>
            <button onClick={handleLogout} className="hover-underline ">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="hover-underline">
              Home
            </Link>
            <Link to="/login" className="hover-underline">
              Login
            </Link>
            <Link to="/signup" className="hover-underline">
              Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
