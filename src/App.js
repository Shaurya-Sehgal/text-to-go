import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Text from "./components/Text";
import About from "./components/About";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TypingTest from "./components/TypingTest";
import Statistics from "./components/Statistics";

function App() {
  const changeTheme = () => {
    if (theme == "dark") {
      setTheme("light");
      document.body.style.backgroundColor = "#f7f7f7";
      setTextTheme("dark");
    } else {
      setTheme("dark");
      document.body.style.backgroundColor = "#212529";
      setTextTheme("light");
    }
  };
  const [theme, setTheme] = useState("light");
  const [textTheme, setTextTheme] = useState("dark");
  return (
    <>
      <Nav changeTheme={changeTheme} theme={theme} textTheme={textTheme} />
      <Routes>
        <Route
          path="/"
          element={<Text theme={theme} textTheme={textTheme} />}
        />
        <Route
          path="/about"
          element={<About theme={theme} textTheme={textTheme} />}
        />
        <Route
          path="/typingtest"
          element={<TypingTest theme={theme} textTheme={textTheme} />}
        />
        <Route
          path="/statistics"
          element={<Statistics theme={theme} textTheme={textTheme} />}
        />
      </Routes>
    </>
  );
}

export default App;
