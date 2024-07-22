import React, { useState } from "react";
import { Link, Navigate  } from "react-router-dom";
import { IoIosCut } from "react-icons/io";

const AdminLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


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
        alert(data.rData.rMessage || "Login Successfully!");
        
      } else {
        alert(data.rData.rMessage || "Invalid Credentials!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to log in.");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className='login-popup'>
      <form className="login-popuo-container" onSubmit={handleLogin}>
        <div className="login-popuo-title">
          <br />
          <h4>Admin-LogIn</h4>
          <div className="icons">
                           <IoIosCut/>
                    </div>      </div>
        <div className="login-popup-inpputs">
          <input
            type="text"
            placeholder="Enter Your Email "
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        
         
          <input
            type="text"
            placeholder="Enter Your Password "
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button>LogIn</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>

        <p>
          Create New Account? <Link to="/SignIn">SignIn Here</Link>{" "}
        </p>
      </form>
      </div>
    </>
  );
};

export default AdminLogIn;
