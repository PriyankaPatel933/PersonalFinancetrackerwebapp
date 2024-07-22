import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { IoIosCut } from "react-icons/io";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const requestData = {
      EventID: "1002",
      addInfo: {
        EMAIL_ID: email,
        Password: password,
      },
    };

    try {
      const response = await fetch("http://localhost:5167/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");

      if (response.ok && data.rData.rCode === 0) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true"); // Store authentication status
        alert(data.rData.rMessage || "Login Successfully!");
      } else {
        setError(data.rData.rMessage || "Invalid Credentials!");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while trying to log in.");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="login-popup">
        <form className="login-popuo-container" onSubmit={handleLogin}>
          <div className="login-popuo-title">
            <br />
            <h4>LogIn</h4>
            <div className="icons">
              <IoIosCut />
            </div>
          </div>
          <div className="login-popup-inpputs">
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to="/resetpassword">
              <p>Forgot Password</p>
            </Link>
          </div>

          <button type="submit">LogIn</button>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>

          <p>
            Create New Account? <Link to="/SignIn">Register Here</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default LogIn;
