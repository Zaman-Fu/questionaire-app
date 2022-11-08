//import './UserSignIn.css';
import React, { useState } from 'react';



const Question = () => {

    const [formAnswer, setAnswer] = useState("");
    const [formPointer, setPointer] = useState(0);

    const questions =
        [
            {
                id: "0",
                questionText: "Are you ok?",
                answerText: [{
                    id: "0",
                    option: "Yes",
                },
                {
                    id: "1",
                    option: "No",
                },
                {
                    id: "2",
                    option: "Buster Wolf",
                }

                ]
            },
            {
                id: "1",
                questionText: "Do you require assistance?",
                answerText: [{
                    id: "3",
                    option: "No",
                },
                {
                    id: "4",
                    option: "Yes",
                },
                {
                    id: "5",
                    option: "I need a therapist",
                }

                ]
            }
        ]
    const qMap = new Map(Object.entries(questions));
    let key = Array.from(qMap.keys())[formPointer];
    console.log(qMap.get(key));
    let qEntry = qMap.get(key);

    const answerChangeHandler = (event) => {
        setAnswer(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();//avoid page reload to handle this request with javascript

        setPointer(formPointer+1);

        console.log('Answer Submission!');

    };

    //We want to dynamically add :1. the question text and 2. The answer options in the dropdown select.
    return (
        <div className="formdiv">
            <p>Input email to proceed to questions</p>

            <form className="signin-form" onSubmit={submitHandler}>

                <label >{qEntry.questionText}</label>
                <select className="options" id="options" name="options" onChange={answerChangeHandler}>
                    {qEntry.answerText.map((data, key) => {
                        return (
                            <option value={data.option}>{data.option}</option>
                        );
                    } )}
                </select>
                <input type="submit" value="Submit" onSubmit={submitHandler}></input>


            </form>


        </div>


    );
}





export default Question;