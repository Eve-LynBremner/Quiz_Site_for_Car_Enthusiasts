import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

import toast from "react-hot-toast";

const Signup = () => {
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const { setUser } = useSession();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const displayError = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const validatePassword = () => {
    if (password !== password2) {
      displayError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // run any validation checks
    if (!validatePassword()) {
      return;
    }

    //do not need to post password2
    try {
      const response = await api.post("/api/users", {
        username: userName,
        email: email,
        password: password,
      }); //, password2: password2 });
      const data = response.data;
      // Update the user in the context
      setUser({
        username: data.user.username,
        id: data.user.id,
      });

      toast.success("Signup Succesful");
      navigate("/login");
    } catch (error) {
      toast.error("Signup Failed");
      console.error("Signup failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-black">
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        required
      />
      {error && <p>{error}</p>}
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
