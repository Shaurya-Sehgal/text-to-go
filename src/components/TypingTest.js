import React, { useRef } from "react";
import { useState } from "react";
import Word from "./Word";
import "../App.css";
import { useEffect } from "react";
import refresh from "./refresh.png";

function TypingTest(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [accuracy, setAccuracy] = useState(100);
  const [start, setStart] = useState(false);
  const [correctWords, setCorrectWords] = useState(0);
  const [time, setTime] = useState(0);
  const [finalResult, setFinalResult] = useState(0);
  const [username, setUsername] = useState("-");
  const [topSpeed, setTopSpeed] = useState("loading...");
  const [yourSpeed, setYourSpeed] = useState(0);
  console.log("yourSpeed");
  let timer = useRef(null);
  let name = "unknown";
  let api = "";
  const [nameInput, setnameInput] = useState("");
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
    setTopSpeed(convertedData.items[0].speed);
  }

  useEffect(() => {
    getHighestSpeed();
  }, []);

  const updateRecord = async () => {
    api = `https://apex.oracle.com/pls/apex/shaurya_sehgal/new/top?username=${nameInput}&speed=${yourSpeed}`;
    await fetch(api, { method: "POST" });
    getHighestSpeed();
  };

  function updateName() {
    updateRecord();
    console.log(yourSpeed);
  }

  const handleOnChange = (event) => {
    if (currentIndex == words.length) {
      //test over
      setYourSpeed(Math.floor(correctWords / (finalResult / 60)));
      if (yourSpeed > topSpeed) {
        document.getElementById("callModal").click();
      }
      return;
    }
    if (currentIndex + 1 == words.length) {
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
      <>
        {/* Button trigger modal */}
        <button
          id="callModal"
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  You beat the WPM high score!
                </h1>
              </div>
              <div className="modal-body text-center">
                <p>Please enter your display name</p>
                <input
                  onChange={(event) => {
                    setnameInput(event.target.value);
                  }}
                  value={nameInput}
                  type="text"
                  id="displayName"
                  className="form-control w-100"
                  placeholder="display name"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
                <p className="mt-4">
                  By doing this, you agree that your display name is appropriate
                  and does not contain more than 10 letters.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  onClick={updateName}
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="container box pt-5">
        <div className="row">
          <div className="col text-end">
            <div className="d-flex justify-content-end align-items-center">
              <img
                src={refresh}
                alt=""
                width={35}
                className="me-2"
                onClick={getHighestSpeed}
              />
              <h4 className={`text-${props.textTheme}`}>
                Top Speed: {topSpeed}
              </h4>
            </div>
            <h4 className={`text-${props.textTheme}`}>{username}</h4>
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
