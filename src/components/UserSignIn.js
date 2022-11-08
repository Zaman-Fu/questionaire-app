//import './UserSignIn.css';
import React, { useState } from "react";
import axios from "../../node_modules/axios/index";

const UserSignIn = (props) => {
  const [formEmail, setEmail] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); //avoid page reload to handle this request with javascript
    //Now sign the user in.
      let userData = {
          email:formEmail
      }
      console.log("Form Submission!");
      //Axios post function, and redirect ONLY if and after the post has successfully completed
      //configure connection
      let config = {
          method: 'post',
          url: 'https://localhost:7076/api/User',
          responseType: 'json',
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
          },
          data: userData,
      }

      axios(config)
          .then((response) => {

              props.onSuccessfulUserLogin(response.data);

          }).then(() => { window.location = "/questions"; });

    
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
