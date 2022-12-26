import React from "react";

function Word(props) {
  return (
    <>
      <span
        className={`fs-2 text-${
          props.word["status"] == "incorrect"
            ? "danger"
            : props.word["status"] == "correct"
            ? "success"
            : "secondary opacity-50"
        }`}
      >
        {props.word["word"] + " "}
      </span>
    </>
  );
}

export default Word;
