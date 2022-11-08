//import './UserSignIn.css';
import React, { useState, useEffect } from "react";
import '../styles/question.css';

import axios from "../../node_modules/axios/index";

const Question = (props) => {
  const [formAnswer, setAnswer] = useState("");
  const [formPointer, setPointer] = useState(0);
  const [isloaded, SetLoaded] = useState(false);
  const [questions, SetQuestions] = useState(null);

  //var questions;
  var qMap;
  var key;
  var qEntry;
  //This will be a fetch from the server

  var config = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };

  useEffect(() => {
    axios(
      {
        method: "get",
        url: "https://localhost:7076/api/Question",
        responseType: "json",
      },
      config
    ).then((response) => {
      console.log(response.data);
      //questions = response.data;
      // SetQuestions(new Map(Object.entries(response.data)));
      SetQuestions(response.data);
      /*qMap = new Map(Object.entries(questions));
                key = Array.from(qMap.keys())[formPointer];
    
                qEntry = qMap.get(key);
                console.log(qEntry.questionText);*/
      SetLoaded(true);
    });
  }, []);

  const handleQuestionSubmit = (event) => {
    event.preventDefault();

    var data = JSON.stringify({
      userId: 1,
      questionId: questions[formPointer].id,
      answer: formAnswer,
    });

    let config = {
      method: "post",
      url: "https://localhost:7076/api/UserAnswer",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //send post request with answer
        console.log(questions.length);

        //Check if formPointer has caught up to size
        if (questions.length > formPointer + 1) {
          setPointer(formPointer + 1);
        } else {
          //set up for redirecting to a success screen
        }

        console.log("Answer Submission!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const answerChangeHandler = (event) => {
    setAnswer(event.target.value);
  };

  //We want to dynamically add :1. the question text and 2. The answer options in the dropdown select.
  if (isloaded) {
    return (
      <div className="formdiv" id="questionsId">
        <form className="signin-form" onSubmit={handleQuestionSubmit}>
          <label>
            <h1 class="display-3 margins">{questions[formPointer].questionText}</h1>
            
          </label>
          <div className="margins">
          <select
            class="form-select" id="floatingSelectGrid"
            name="options"
            onChange={answerChangeHandler}
          >
            {questions[formPointer].answerText.map((a) => (
              <option value={a.option}>{a.option}</option>
            ))}
          </select>
          <input type="submit" class="btn btn-primary" value="Submit"></input>
          </div>
        </form>
      </div>
    );
  } else {
    return <div id="questionsId">Loading Question</div>;
  }
};

export default Question;
