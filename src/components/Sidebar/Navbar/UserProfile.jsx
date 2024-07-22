import React, { useState } from "react";
import "./Navbar.css";
import { Navigate } from "react-router-dom";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [profession, setProfession] = useState("");
  const [image, setImage] = useState("");
  const [isTransactionSuccess, setIsTransactionSuccess] = useState(false);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Set the base64 string as the image state
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file); // This triggers reader.onloadend
    }
  };

  const handleUserProfileSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      EventID: "1004",
      AddInfo: {
        Name: name,
        DateOfBirth: dateOfBirth,
        Gender: gender,
        Email: email,
        PhoneNo: phoneNo,
        Profession: profession,
        Image: image,
      },
    };

    try {
      const response = await fetch("http://localhost:5145/userprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("API response data:", data);

      if (response.ok && data.rData && data.rData.Transition) {
        setIsTransactionSuccess(true);
        alert(data.rMessage || "Failed to save profile!");
      } else {
        alert(data.rMessage || "Saved Profile Successful!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to save profile.");
    }
  };

  if (isTransactionSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <div className="form-container">
      <h2>User Profile</h2>

      <form onSubmit={handleUserProfileSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label htmlFor="dateOfBirth">
          Date of Birth:
          <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </label>

        <label htmlFor="gender">
          Gender:
          <input
            type="text"
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="phoneNo">
          Phone Number:
          <input
            type="tel"
            id="phoneNo"
            name="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </label>

        <label htmlFor="profession">
          Profession:
          <input
            type="text"
            id="profession"
            name="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </label>

        <label htmlFor="image">
          Profile Picture:
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileInputChange}
            accept="image/*"
          />
        </label>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
