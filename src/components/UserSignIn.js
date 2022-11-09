//import './UserSignIn.css';
import React, { useState } from "react";
import axios from "../../node_modules/axios/index";
import loggedUserObject from "../global/loggedUser";
import "../styles/question.css";

const UserSignIn = (props) => {
  const [formEmail, setEmail] = useState("");

    
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); //avoid page reload to handle this request with javascript
    //Now sign the user in.
    let userData = {
      email: formEmail,
    };
    console.log("Form Submission!");
    //Axios post function, and redirect ONLY if and after the post has successfully completed
    //configure connection
    let config = {
      method: "post",
      url: "https://localhost:7076/api/User",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: userData,
    };

      axios(config)
          .then((response) => {

              //window.currentUser = response.data;
              //console.log(window.currentUser);
              window.location = `/questions/?id=${response.data.id}`;

          }).then(() => {/* window.location = "/questions";*/ });

    
  };

  return (
    <div className="formdiv">
      <label>
        <h4 class="display-5 margins">Input email to proceed to questions</h4>
      </label>
      <form className="signin-form" onSubmit={submitHandler}>

        <div class="col-md">
          <div class="form-floating margins">
            <input
              type="text"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              onChange={emailChangeHandler}
            />
            <label for="floatingInputGrid">Email address</label>
          </div>
        </div>

        <input
          type="submit"
          value="Submit"
          className="btn btn-primary"
          onSubmit={submitHandler}
        ></input>
      </form>
    </div>
  );
};

export default UserSignIn;
