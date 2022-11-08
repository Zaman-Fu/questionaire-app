import logo from "./logo.svg";
import "./App.css";
import UserSignIn from "./components/UserSignIn";
import Question from "./components/Question";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

    var currentlyLoggedUser = null;
    const userLoginHandler = (loggedUser) =>
    {
        currentlyLoggedUser = loggedUser;
        console.log(currentlyLoggedUser);
    }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
                  <Route path="*" element={<UserSignIn onSuccessfulUserLogin={userLoginHandler} />} />
          <Route path="/questions" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
