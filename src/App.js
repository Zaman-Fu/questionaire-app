import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import UserSignIn from "./components/UserSignIn";
import Question from "./components/Question";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

    /*const [currentlyLoggedUser, setCurrentUser] = useState(null);
    const userLoginHandler = (loggedUser) =>
    {
        setCurrentUser(loggedUser)
        console.log(currentlyLoggedUser);
    }*/


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<UserSignIn onSuccessfulUserLogin={userLoginHandler} />}
          />
          <Route path="/questions" element={<Question currentlyLoggedUser={currentlyLoggedUser}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
