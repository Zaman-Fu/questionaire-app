//import './UserSignIn.css';
import React, { useState,useEffect } from 'react';

import axios from '../../node_modules/axios/index';



const Question = () => {

    const [formAnswer, setAnswer] = useState("");
    const [formPointer, setPointer] = useState(0);
    const [isloaded, SetLoaded] = useState(false);
    const [questions, SetQuestions] = useState(null);

   //var questions;
    var qMap;
    var key;
    var qEntry ;
    //This will be a fetch from the server

    var config = {
        headers: { 'Access-Control-Allow-Origin': '*' }
    };

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://localhost:7076/api/Question',
            responseType: 'json'
        }, config)
            .then((response) => {
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
    

    
   

    const answerChangeHandler = (event) => {
        setAnswer(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();//avoid page reload to handle this request with javascript
        //send post request with answer
        console.log(questions.length);

        //Check if formPointer has caught up to size 
        if (questions.length > formPointer + 1) {

            setPointer(formPointer + 1);
        }else
        {
           //set up for redirecting to a success screen

        }
        
       

        console.log('Answer Submission!');

    };

    //We want to dynamically add :1. the question text and 2. The answer options in the dropdown select.
    if (isloaded) {
        return (
            <div className="formdiv">

                <form className="signin-form" onSubmit={submitHandler}>
                    
                    <label >{questions[formPointer].questionText}</label>
                    <select className="options" id="options" name="options" onChange={answerChangeHandler}>
                        {
                            questions[formPointer].answerText.map(a =>
                            (
                                <option value={a.option} >{a.option}</option>
                                )
                                
                            )
                        }
                                
                          
                    </select>
                    <input type="submit" value="Submit"></input>


                </form>


            </div>


        );
    }
    else { return <div>Loading Question</div> }
}





export default Question;