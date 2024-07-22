import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoIosCut } from "react-icons/io";

const SignIn = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (!/[a-z]/.test(password)) {
      errors.password =
        " Password must contain at least one lowercase alphabet character";
    }

    return errors;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const requestData = {
      EventID: "1003",
      AddInfo: {
        Name: name,
        Email_Id: email,
        Password: password,
      },
    };

    try {
      const response = await fetch("http://localhost:5145/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");

      if (response.ok && data.rData === 0) {
        setIsSignedIn(true);
        alert(data.rMessage || "SignIn Successfully!");
      } else {
        alert(data.rMessage || "SignIn Successfully!!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to Sign in.");
    }
  };

  if (isSignedIn) {
    return <navigate to="/trans" />;
  }

  return (
    <>
      <div className="login-popup">
        <form className="login-popuo-container" onSubmit={handleSignIn}>
          <div className="login-popuo-title">
            <br />
            <h2>Register</h2>
            <div className="icons">
              <IoIosCut />
            </div>
          </div>
          <div className="login-popup-inpputs">
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <br />

            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <br />

            <input
              type="text"
              placeholder="Enter Your password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
      

          </div>
          <button type="submit">Register</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              I agree to the terms of use & privacy policy And Save Password.
            </p>
          </div>

          <p>
            Already Have an Account? <Link to="/LogIn">LogIn Here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
