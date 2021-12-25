import React from "react";
import "./index";

function App() {
  return (
    <div className="form-container">
      <form className="register-form">
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
      </form>
      <input
        id="last-name"
        className="form-field"
        type="text"
        placeholder="Last Name"
        name="lastName"
      />
      <input
        id="email"
        className="form-field"
        type="text"
        placeholder="Email"
        name="email"
      />
      <button className="form-field" type="submit">
        Register
      </button>
    </div>
  );
}

export default App;
