import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let newErrors = {};

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in|[a-z]{2,})$/;

    if (!emailPattern.test(formData.email)) {
      newErrors.email =
        "Email must contain @ and valid domain (.com, .in, or country code)";
    }

    // Password validation
    const password = formData.password;

    if (!/^[A-Z]/.test(password)) {
      newErrors.password =
        "Password must start with a capital letter.";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password =
        "Password must contain at least one number.";
    } else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
      newErrors.password =
        "Password must contain at least one special character.";
    } else if (password.length < 5) {
      newErrors.password =
        "Password must be at least 5 characters long.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully!");
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="container">
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;