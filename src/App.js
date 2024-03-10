// import logo from './logo.svg';
import "./App.css";
import { FaCopy } from "react-icons/fa";
import React, { useState } from "react";

function App() {
  const [passcode, setPasscode] = useState("");
  const [length, setLength] = useState(0);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  // funtions are here

  function handleClick() {
    const small = "abcdefghijklmnopqrstuvwxyz";
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+{}:\"<>?|[];',./";
    const numbers = "0123456789";
    let passcodeFrom = "";
    let generatedPassword = "";

    if (upperCase) passcodeFrom += small;
    if (lowerCase) passcodeFrom += capital;
    if (symbol) passcodeFrom += symbols;
    if (number) passcodeFrom += numbers;

    if (length < 0) {
      return alert("PASSCODE CAN NOT BE IN NEGATIVE");
    }
    if (length < 8 || length > 51) {
      return alert(
        "😮😮 YOUR VALUE EITHER GREATER THAN 50 OR SMALLER THAN 8 PLEASE FILL THE VALUE BETWEEN 8 TO 50 "
      );
    }
    if (
      upperCase === false &&
      lowerCase === false &&
      symbol === false &&
      number === false
    ) {
      return alert("CUSTOMIZE YOUR PASSWORD BY CLICKING THE CHEKBOX");
    }

    for (let i = 0; i < length; i++) {
        generatedPassword+=passcodeFrom.charAt(
        Math.floor(Math.random() * passcodeFrom.length)
      );
    }

    setPasscode(generatedPassword);
  }

  function handleCopy() {
    if (passcode) {
      navigator.clipboard.writeText(passcode).then(
        () => {
          alert("PASSWORD IS COPIED");
        },
        (err) => {
          alert("Unable to copy password to clipboard", err);
        }
      );
    } else {
      alert("Password field is empty,nothing to copy!");
    }
  }


  

  return (
    <>
      <h1>Password Generator</h1>
      <div id="passcodeGenerator">
        <input value={passcode} disabled />
        <FaCopy id="copy" style={{ fontSize: "2rem" }} onClick={handleCopy} />
      </div>

      <div id="passcodeLength">
        <p>
          Select Password length<b>(**8-50 characters**)</b>
        </p>
        <input
          type="number"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>

      <div id="checkboxDiv">
        <input
          type="checkbox"
          id="uppercase"
          onChange={() => {
            setLowerCase(!lowerCase);
          }}
        />
        <label for="uppercase">Include upper case</label>
        <br />
        <input
          type="checkbox"
          id="lowercase"
          onChange={() => {
            setUpperCase(!upperCase);
          }}
        />
        <label for="lowercase">Include lower case</label>
        <br />
        <input
          type="checkbox"
          id="number"
          onChange={() => {
            setNumber(!number);
          }}
        />
        <label for="number">Include numbers</label>
        <br />
        <input
          type="checkbox"
          id="symbols"
          onChange={() => {
            setSymbol(!symbol);
          }}
        />
        <label for="symbols">Include symbols</label>
        <br /> <br />
        <button id="passcodeButton" onClick={handleClick}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
