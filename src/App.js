import React from "react";
import "./index.css";
import { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    firstName : "",
    lastName : "",
    email : ""
  })

  const[submitted , setSubmitted] = useState(false);

  const [valid , setValid] = useState(false);

  const handleFirstName = (e) => {
    setValues({...values , firstName:e.target.value})
  }

  const handleLastName = (e) => {
    setValues({...values , lastName:e.target.value})
  }

  const handleEmail = (e) => {
    setValues({...values , email:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div class="success-message">Success! Thank you for Registering</div> : null}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstName}
        />
        {submitted && !values.firstName ? <span id="first-name-error">Please Enter a First Name</span> : null}

        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastName}
        />
        {submitted && !values.lastName ? <span id="last-name-error">Please Enter a Last Name</span> : null}

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmail}
        />
        {submitted && !values.email ? <span id="email-error">Please Enter an Email Address</span> : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}