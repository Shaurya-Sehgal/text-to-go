import React, { useState } from "react";

function Text(props) {
  const [text, setText] = useState("");
  const updateText = (event) => {
    setText(event.target.value);
  };
  const makeUppercase = () => {
    setText(text.toUpperCase());
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/uppercase");
  };
  const makeLowercase = () => {
    setText(text.toLowerCase());
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/lowercase");
  };
  const makeSnakecase = () => {
    setText(text.toLowerCase().split(" ").join("_"));
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/snakecase");
  };
  const copy = () => {
    navigator.clipboard.writeText(text);
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/copytext");
  };
  const lineBreak = () => {
    setText(text.split("\n").join(" "));
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/linebreak");
  };
  const insertComma = () => {
    setText(text.split(" ").join(","));
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/comma");
  };
  const makeArray = () => {
    setText('["' + text.split(" ").join('","') + '"]');
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/makearray");
  };
  const splitText = () => {
    setText(text.split(" ").join("\n"));
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/splittext");
  };
  const reverse = () => {
    setText(text.split("").reverse().join(""));
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/reversetext");
    generateNumber();
  };
  const generateNumber = () => {
    let words = text.split("\n");
    for (let i = 0; i < words.length; i++) {
      words[i] = i + 1 + words[i];
    }
    setText(words.join("\n"));
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/numberlines");
  };
  const multiply = () => {
    setText(text.repeat(2));
    fetch("https://apex.oracle.com/pls/apex/shaurya_sehgal/used/repeatline");
  };
  const random = () => {};
  return (
    <>
      <div className={`bg-${props.theme}`}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <table
                className={`table table-hover border table-${props.theme}`}
              >
                <tbody>
                  <tr>
                    <td>Reading Time(seconds)</td>
                    <td>{text.split(" ").length / 5}</td>
                  </tr>
                  <tr>
                    <td>Word Count</td>
                    <td>{text.split(" ").length}</td>
                  </tr>
                  <tr>
                    <td>Characters</td>
                    <td>{text.length}</td>
                  </tr>
                  <tr>
                    <td>Characters Without Spaces</td>
                    <td>{text.split(" ").join("").length}</td>
                  </tr>
                  <tr>
                    <td>Sentances</td>
                    <td>{text.split(".").length - 1}</td>
                  </tr>
                  <tr>
                    <td>Lines</td>
                    <td>{text.split("\n").length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col mb-5">
              <div className="form-floating">
                <textarea
                  onChange={updateText}
                  value={text}
                  className={`form-control text-${props.textTheme} bg-${props.theme}`}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: 200 }}
                />
                <label
                  htmlFor="floatingTextarea2"
                  className={`text-${props.textTheme}`}
                >
                  Write your text here
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={makeUppercase}
              >
                Uppercase
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={makeLowercase}
              >
                Lowercase
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={makeSnakecase}
              >
                Snakecase
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={lineBreak}
              >
                Line Break
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={insertComma}
              >
                Add Comma
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={makeArray}
              >
                Make Array
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={splitText}
              >
                Split Text
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={reverse}
              >
                Reverse Text
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={generateNumber}
              >
                Number Lines
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={multiply}
              >
                Repeat
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={random}
              >
                Random Case
              </button>
            </div>
            <div className="col-md-4 text-center py-2">
              <button
                className={`btn w-75 btn-${
                  props.theme == "light" ? "secondary" : "outline-light"
                }`}
                onClick={copy}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Copy
              </button>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className={`modal-content bg-${props.theme}`}>
                  <div className="modal-header">
                    <h1
                      className={`modal-title fs-5 text-${props.textTheme}`}
                      id="exampleModalLabel"
                    >
                      Text-To-Go
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className={`modal-body text-${props.textTheme}`}>
                    "{text}" has been copied!
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Text;
