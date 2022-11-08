import logo from "./logo.svg";
import "./App.css";
import UserSignIn from "./components/UserSignIn";
import Question from "./components/Question";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<UserSignIn />} />
          <Route path="/questions" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
