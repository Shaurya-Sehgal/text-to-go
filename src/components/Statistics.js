import React, { useEffect } from "react";
import { useState } from "react";

function Statistics(props) {
  const [mostUsed, setMostUsed] = useState({});
  let data;

  async function getMostUsed() {
    data = await fetch(
      "https://apex.oracle.com/pls/apex/shaurya_sehgal/used/most"
    );
    let convertedData = await data.json();
    console.log(convertedData.items);
    setMostUsed(convertedData.items[0]);
    console.log(convertedData.items[0].lowercase);
  }

  useEffect(() => {
    getMostUsed();
  }, []);

  return (
    <>
      <div className="container text-center">
        <div
          className="row d-flex align-items-center"
          style={{ minHeight: "90vh" }}
        >
          <div className="col">
            <table class={`table table-hover table-${props.theme}`}>
              <thead>
                <tr>
                  <th scope="col">Upper Case</th>
                  <th scope="col">Lower Case</th>
                  <th scope="col">Snake Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{mostUsed.uppercase}</td>
                  <td>{mostUsed.lowercase}</td>
                  <td>{mostUsed.snakecase}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th scope="col">Line Break</th>
                  <th scope="col">Add Comma</th>
                  <th scope="col">Make Array</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{mostUsed.linebreak}</td>
                  <td>{mostUsed.comma}</td>
                  <td>{mostUsed.makearray}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th scope="col">Split Text</th>
                  <th scope="col">Reverse Text</th>
                  <th scope="col">Number Lines</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{mostUsed.splittext}</td>
                  <td>{mostUsed.reversetext}</td>
                  <td>{mostUsed.numberlines}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th scope="col">Repeat</th>
                  <th scope="col">Random Case</th>
                  <th scope="col">Copy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{mostUsed.repeatline}</td>
                  <td>{mostUsed.randomcase}</td>
                  <td>{mostUsed.copytext}</td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={getMostUsed}>
              Refresh
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
