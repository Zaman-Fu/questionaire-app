import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import UserSignIn from "./components/UserSignIn";
import Question from "./components/Question";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    //NEW PLAN: Use the window variable. I suspect it´s bad practice, will look into more elegant solutions later
    window.currentUser = null;
    //const [currentlyLoggedUser, setCurrentUser] = useState(null);
    /*let currentlyLoggedUser = null;
    const userLoginHandler = (loggedUser) =>
    {
        setCurrentUser(loggedUser)
        console.log(currentlyLoggedUser);
    }*/


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
                  <Route path="*" element={<UserSignIn  />} />
                  <Route path="/questions" element={<Question  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
