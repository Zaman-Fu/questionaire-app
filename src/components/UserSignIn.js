//import './UserSignIn.css';
import React, { useState } from "react";

const UserSignIn = () => {
  const [formEmail, setEmail] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); //avoid page reload to handle this request with javascript
    //Now sign the user in.
    console.log("Form Submission!");

    window.location = "/questions";
  };

  return (
    <div className="formdiv">
      <p>Input email to proceed to questions</p>
      <form className="signin-form" onSubmit={submitHandler}>
        <label>Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={emailChangeHandler}
        ></input>
        <input type="submit" value="Submit" onSubmit={submitHandler}></input>
      </form>
    </div>
  );
};

export default UserSignIn;
