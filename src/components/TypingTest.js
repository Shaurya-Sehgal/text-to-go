import React, { useRef } from "react";
import { useState } from "react";
import Word from "./Word";
import "../App.css";
import { useEffect } from "react";

function TypingTest(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [accuracy, setAccuracy] = useState(100);
  const [start, setStart] = useState(false);
  const [correctWords, setCorrectWords] = useState(0);
  const [time, setTime] = useState(0);
  const [finalResult, setFinalResult] = useState(0);
  const [username, setUsername] = useState("-");
  const [speed, setSpeed] = useState("loading...");
  let timer = useRef(null);
  const [words, setWords] = useState([
    { word: "hello", status: "untracked" },
    { word: "website", status: "untracked" },
    { word: "elephant", status: "untracked" },
    { word: "phone", status: "untracked" },
    { word: "my", status: "untracked" },
    { word: "universe", status: "untracked" },
    { word: "school", status: "untracked" },
    { word: "coding", status: "untracked" },
    { word: "random", status: "untracked" },
  ]);

  let data;

  async function getHighestSpeed() {
    data = await fetch(
      "https://apex.oracle.com/pls/apex/shaurya_sehgal/typing/speed"
    );
    let convertedData = await data.json();
    console.log(convertedData.items);
    setUsername(convertedData.items[0].username);
    setSpeed(convertedData.items[0].speed);
  }

  useEffect(() => {
    getHighestSpeed();
  }, []);

  const handleOnChange = (event) => {
    if (currentIndex == words.length) {
      return;
    }
    if (currentIndex + 1 == words.length) {
      console.log("eee");
      clearInterval(timer.current);
    }

    if (start == false) {
      timer.current = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 1000);
      setStart(true);
    }
    setFinalResult(time);
    setAccuracy(Math.floor((correctWords / currentIndex) * 100));
    if (event.target.value[event.target.value.length - 1] == " ") {
      if (currentWord == words[currentIndex]["word"]) {
        words[currentIndex]["status"] = "correct";
        setCorrectWords(correctWords + 1);
      } else {
        words[currentIndex]["status"] = "incorrect";
      }
      setCurrentWord("");
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentWord(event.target.value);
    }
  };
  return (
    <>
      <div className="container box pt-5">
        <div className="row">
          <div className="col text-end">
            <h4>Speed: {speed}</h4>
            <h4>{username}</h4>
          </div>
        </div>
        <div className="row text-center my-5">
          <div className="col">
            <h1 className={`text-${props.textTheme}`}>
              WPM:{" "}
              {currentWord >= words.length
                ? Math.floor(correctWords / (finalResult / 60))
                : Math.floor(correctWords / (time / 60))}
            </h1>
            <h1 className={`text-${props.textTheme}`}>Accuracy: {accuracy}</h1>
          </div>
        </div>
        <div className="row text-center sentance">
          <div className="col">
            {words.map((word, index) => {
              return <Word word={word} key={index} />;
            })}
          </div>
        </div>
        <div className="row text-center my-5">
          <div className="col">
            <input
              type="text"
              placeholder="Start here"
              className={`shadow-lg w-25 fs-3 rounded-pill p-2 text-center border border-${
                props.theme == "dark" ? "secondary" : "dark"
              } border-5`}
              value={currentWord}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TypingTest;
