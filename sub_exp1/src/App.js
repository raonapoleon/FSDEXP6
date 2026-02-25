import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    skills: []
  });

  // Get today's date (to disable future dates)
  const today = new Date().toISOString().split("T")[0];

  // Handle text, date, dropdown, radio
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox (skills)
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value)
      });
    }
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `First Name: ${formData.firstName}
Last Name: ${formData.lastName}
DOB: ${formData.dob}
Gender: ${formData.gender}
Address: ${formData.address}
State: ${formData.state}
Skills: ${formData.skills.join(", ")}`
    );
  };

  // Handle reset
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      address: "",
      state: "",
      skills: []
    });
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          max={today}
          required
        />

        <label>Gender:</label>
        <div className="radio-group">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
            required
          /> Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          /> Female
        </div>

        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <label>State:</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select State</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Delhi">Delhi</option>
          <option value="Karnataka">Karnataka</option>
        </select>

        <label>Skills:</label>
        <div className="checkbox-group">
          <input
            type="checkbox"
            value="HTML"
            checked={formData.skills.includes("HTML")}
            onChange={handleSkillChange}
          /> HTML

          <input
            type="checkbox"
            value="CSS"
            checked={formData.skills.includes("CSS")}
            onChange={handleSkillChange}
          /> CSS

          <input
            type="checkbox"
            value="JavaScript"
            checked={formData.skills.includes("JavaScript")}
            onChange={handleSkillChange}
          /> JavaScript

          <input
            type="checkbox"
            value="React"
            checked={formData.skills.includes("React")}
            onChange={handleSkillChange}
          /> React
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </form>
    </div>
  );
}

export default App;